<?php

namespace App\Http\Controllers;

use App\Http\Requests\SearchRequest;
use App\Models\LocalSearch;

class LocalDictionaryController extends Controller
{
    public function words(SearchRequest $request)
    {
        $localSearch = new LocalSearch();
        return $localSearch->words($request);
    }
}
