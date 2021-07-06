<?php

namespace App\Http\Controllers;

use App\Http\Requests\SearchRequest;
use Illuminate\Support\Facades\DB;
use Inertia\Inertia;


class LocalDictionaryController extends Controller
{
    public function words()
    {
        $arr = [];
        $nextPageUrl = "";

        if (Request()->query("search")) {

            $data = DB::table('ord_norsk_samisk_BACKUP')
            ->where('fra', 'like', Request()->query("search"))
            ->orWhere('til', 'like', Request()->query("search"))
            ->orWhere('fra', 'like', '%' . Request()->query("search"))
            ->orWhere('til', 'like', '%' . Request()->query("search"))
            ->orWhere('fra', 'like', '%' . Request()->query("search") . '%')
            ->orWhere('til', 'like', '%' . Request()->query("search") . '%')
            ->orderBy('id')
            ->cursorPaginate(500);
            
            $arr = $data->items();
            $nextPageUrl = $data->nextPageUrl();
        }

        return Inertia::render('Search', [
            'search' => Request()->query("search"),
            'res' => $arr,
            'nextPageUrl' => $nextPageUrl
        ]);
    }

    public function lookup(SearchRequest $request)
    {
    }

}
