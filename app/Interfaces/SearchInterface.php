<?php

namespace App\Interfaces;

use App\Http\Requests\SearchRequest;

/**
 * Interface with functions for searching for words and get specific translations.
 */

interface SearchInterface
{
    /**
     * Search for words that contains the pattern recieved in the request
     */
    public function words(SearchRequest $request);

    /**
     * Search for a translation for a specific word recived in the request
     */
    public function lookup(SearchRequest $request);
}
