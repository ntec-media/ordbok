<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App\Http\Requests\SearchRequest;
use App\Models\Search;
use Illuminate\Pagination\Paginator;


class LocalDictionaryController extends Controller
{
    public function words(Request $request)
    {
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
        ->simplePaginate(100);

        return $data->items();
    }

    public function lookup(SearchRequest $request)
    {
    }

}
