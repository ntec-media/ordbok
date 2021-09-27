<?php

namespace App\Http\Controllers;

use App\Http\Requests\NewWordRequest;
use App\Models\NewWord;

class NewWordController extends Controller
{
    public function store(NewWordRequest $request)
    {
        $word = NewWord::firstOrCreate([
            'norwegian' => $request->input('norwegian'),
            'sami' => $request->input('sami'),
        ]);


        return $word;
    }
}
