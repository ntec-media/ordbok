<?php

namespace App\Http\Controllers;

use App\Models\Translation;
use Illuminate\Http\Request;

class SearchController extends Controller
{
    /**
     * Main method for getting search results
     * Request { search: string, page: int, orderBy: string}
     */
    public function get(Request $request)
    {
        return Translation::localSearch($request);
    }
}
