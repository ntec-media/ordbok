<?php

namespace App\Http\Controllers;

use App\Models\ErrorSubmit;
use Illuminate\Http\Request;

class ErrorSubmitController extends Controller
{
    public function store(Request $request)
    {
        $newSubmit = ErrorSubmit::create([
            'from' => $request->input('from'),
            'to' => $request->input('to'),
            'description' => $request->input('description'),
        ]);
    }
}
