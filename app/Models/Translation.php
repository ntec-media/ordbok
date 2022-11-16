<?php

namespace App\Models;
use App\Imports\TranslationsImport;
use Maatwebsite\Excel\Facades\Excel;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Translation extends Model
{
    use HasFactory;

    protected $table = 'smj_translations';

    protected $fillable = [
        'fra',
        'til',
        'kildeid',
        'oversatt_fra',
        'oversatt_til',
        'kredittering',
        'publisert',
        'brukerforslag',
    ];

    public $timestamps = false;

    public static function import() {
        $array =  Excel::toArray(new TranslationsImport, 'nob-smj.xlsx');
        $exArr = [];
        $newArr = [];

        foreach ($array[0] as $el) {
            if ($el[0]) {
                $exist = self::where([
                    'fra' => $el[0],
                    'kildeid' => 0,
                ])->first();
                if ($exist) {
                    $exist->til !== $el[1] && array_push($exArr, $exist);
                    
                } else {
                    array_push($newArr, [$el]); 
                }
            }
        }
        return $newArr;
    }
}
