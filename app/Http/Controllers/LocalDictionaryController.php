<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Controllers\ISearch;
use Illuminate\Support\Facades\DB;
use App\Http\Requests\SearchRequest;
use Inertia\Inertia;

class LocalDictionaryController extends Controller implements ISearch
{
    public function words(SearchRequest $request) {
        
        $data = json_decode($request->getContent());

        $d1 = DB::table('ord_norsk_samisk_BACKUP')->where('fra', 'like', '%' . $data->value . '%')->get();
        $d2 = DB::table('ord_norsk_samisk_BACKUP')->where('til', 'like', '%' . $data->value . '%')->get();
        
        return Inertia::render('/', [
            $d1->merge($d2)
        ]);
    }

    public function lookup(SearchRequest $request) {

    }
}