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

        $data = DB::table('ord_norsk_samisk_BACKUP')
        ->where('fra', 'like', $request->input('search'))
        ->orWhere('til', 'like', $request->input('search'))
        ->orWhere('fra', 'like', '%' . $request->input('search'))
        ->orWhere('til', 'like', '%' . $request->input('search'))
        ->orWhere('fra', 'like', '%' . $request->input('search') . '%')
        ->orWhere('til', 'like', '%' . $request->input('search') . '%')
        ->orderBy('fra')
        ->simplePaginate(50);

        $this->statistic->registerSearch();

        return $data->items();
    }

    /**
     * Not implimented in this class
     */
    public function lookup(SearchRequest $request)
    {
        return null;
    }
}
