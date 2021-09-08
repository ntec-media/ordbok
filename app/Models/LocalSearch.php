<?php

namespace App\Models;

use App\Http\Requests\SearchRequest;
use App\Interfaces\SearchInterface;
use Illuminate\Pagination\Paginator;
use Illuminate\Support\Facades\DB;

class LocalSearch implements SearchInterface
{
    public function __construct()
    {
        $this->statistic = new Statistic();
    }

    public function words(SearchRequest $request)
    {
        $currentPage = $request->input('page');
        Paginator::currentPageResolver(function () use ($currentPage) {
            return $currentPage;
        });

        $search = preg_replace('/((?<=[^*])( ))+/', '* ', $request->input('search'));

        $search = str_ends_with($search, '*') ? $search : $search . '*';

        $results = DB::table('ord_norsk_samisk_BACKUP')
                    ->select('*')
                    ->whereIn('kredittering', $request->input('dicts'))
                    ->whereRaw("MATCH (fra,til) AGAINST (? IN BOOLEAN MODE)", $search)
                    ->orderByRaw("MATCH (fra) AGAINST (? IN BOOLEAN MODE) DESC", $search)
                    ->orderByRaw("MATCH (til) AGAINST (? IN BOOLEAN MODE) DESC", $search);

        return $results->paginate(25)->items();
        ;
    }

    /**
     * Not implimented in this class
     */
    public function lookup(SearchRequest $request)
    {
        return null;
    }
}
