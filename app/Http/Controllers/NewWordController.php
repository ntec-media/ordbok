<?php

namespace App\Http\Controllers;

use App\Http\Requests\NewWordRequest;
use App\Models\NewWord;

class NewWordController extends Controller
{
    public function store(NewWordRequest $request)
    {
        $body = json_decode($request->getContent());

        $word = NewWord::firstOrNew([
            'norwegian' => $body->norwegian,
            'sami' => $body->sami,
        ]);

        $word->save();


        return $word;
    }
}
