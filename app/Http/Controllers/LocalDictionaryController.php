<?php

namespace App\Http\Controllers;

use App\Http\Requests\SearchRequest;
use Illuminate\Pagination\Paginator;
use Illuminate\Support\Facades\DB;

class LocalDictionaryController extends Controller
{
    public function words(SearchRequest $request)
    {
        return $request;
        $body = json_decode($request->getContent());
        $currentPage = $body->page;

        Paginator::currentPageResolver(function () use ($currentPage) {
            return $currentPage;
        });


        $data = DB::table('ord_norsk_samisk_BACKUP')
        ->where('fra', 'like', $body->search)
        ->orWhere('til', 'like', $body->search)
        ->orWhere('fra', 'like', '%' . $body->search)
        ->orWhere('til', 'like', '%' . $body->search)
        ->orWhere('fra', 'like', '%' . $body->search . '%')
        ->orWhere('til', 'like', '%' . $body->search . '%')
        ->orderBy('fra')
        ->simplePaginate(50);

        return $data->items();
    }

    public function lookup(SearchRequest $request)
    {
    }
}
