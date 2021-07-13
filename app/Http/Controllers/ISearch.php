<?php

namespace App\Http\Controllers;

use App\Http\Requests\SearchRequest;

interface ISearch
{
    public function words(SearchRequest $request);

    public function lookup(SearchRequest $request);
}