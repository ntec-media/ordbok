<?php

namespace App\Console\Commands;

use Exception;
use Illuminate\Console\Command;
use App\Models\Translation;
use App\Imports\TranslationsImport;
use Maatwebsite\Excel\Facades\Excel;

class ImportTranslations extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'import:excel {filename}';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Script designed to import a xlsx-list with translations, then apply or update these words';

    /**
     * Execute the console command.
     *
     * @return int
     */
    public function handle()
    {
        try {
            $filename = $this->argument('filename');
            if ($filename === 'nob-smj.xlsx') {
                $from_smj = false;
            } else if ($filename === 'smj-nob.xlsx') {
                $from_smj = true;
            } else {
                return $this->error('Plase name file smj-nob.xlsx or nob-smj.xlsx');
            }

            $array =  Excel::toArray(new TranslationsImport, $filename);
            $existingWords = [];
            $newWords = [];
            foreach ($array[0] as $el) {
                // Check if word exist before remaking it
                if ($el[0]) {
                    $word = Translation::where([
                    'fra' => $el[0],
                    'kildeid' => 0, // Medisijnalasj báhkogirjje  
                    ])->first();
                    if ($word) {
                        if ($word->til !== $el[1]) {
                            $word->til = $el[1];
                            $word->save();
                            array_push($existingWords, $word);
                        } 
                    } else {
                        $newWord = new Translation([
                            'fra' => $el[0],
                            'til' => $el[1],
                            'kildeid' => 0, // Medisijnalasj báhkogirjje
                            'oversatt_fra' => $from_smj ? 'samisk' : 'norsk',
                            'oversatt_til' => $from_smj ? 'norsk' : 'samisk',
                            'kredittering' => 'Medisijnalasj báhkogirjje',
                            'publisert' => 1,
                        ]);
                            $newWord->save();
                        array_push($newWords, $newWord);
                    }

                }
            }
        return $this->info(count($existingWords) . " Ord oppdatert. " . count($newWords) . " Nye ord lagt til");
        } catch(Exception $e) {
            return $this->error($e);
        }

    }
}
