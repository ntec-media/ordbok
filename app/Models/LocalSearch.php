<?php

namespace App\Models;

use Illuminate\Support\Facades\DB;
use App\Interfaces\SearchInterface;
use App\Http\Requests\SearchRequest;
use Illuminate\Pagination\Paginator;

class LocalSearch implements SearchInterface
{

    public function words(SearchRequest $request) {
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

        return $data->items();
    }

    /**
     * Not implimented in this class
     */
    public function lookup(SearchRequest $request) {
        return null;
    }
}
