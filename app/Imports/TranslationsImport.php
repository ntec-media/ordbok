<?php

namespace App\Imports;

use App\Models\Translation;
use Maatwebsite\Excel\Concerns\ToModel;

class TranslationsImport implements ToModel
{
    /**
    * @param array $row
    *
    * @return \Illuminate\Database\Eloquent\Model|null
    */
    public function model(array $row)
    {
        return new Translation([
            'fra' => $row[0],
            'til' => $row[1],
        ]);
    }
}
