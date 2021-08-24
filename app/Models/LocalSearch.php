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

        // Query 1:
        $q1 = DB::table('ord_norsk_samisk_BACKUP')
        ->where(
            [
            ['fra', $request->input('search')], ],
        )
            ->whereIn('kredittering', $request->input('dicts'))
            ->get();

        return $q1;

        /*
                if ($request->page === 1) {
                $query1 = DB::table('ord_norsk_samisk_BACKUO')
                ->where('fra', 'like', $request->input('search'))
                ->orWhere('til', 'like', $request->input('search'))
                ->orWhere('fra', 'like', '%' . $request->input('search'))
                ->orWhere('fra', 'like', '%' . $request->input('search') . '%')
                ->get();
                }



                $this->statistic->registerSearch();

                return $query1->items();
                */
    }

    /**
     * Not implimented in this class
     */
    public function lookup(SearchRequest $request)
    {
        return null;
    }
}
