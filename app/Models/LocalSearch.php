<?php

namespace App\Models;

use App\Http\Requests\SearchRequest;
use App\Interfaces\SearchInterface;
use App\Jobs\ProcessStatistic;
use Illuminate\Support\Facades\DB;

class LocalSearch implements SearchInterface
{
    public function __construct()
    {
        $this->statistic = new Statistic();
    }

    public function words(SearchRequest $request)
    {
        $search = $request->input('search');

        // $dicts = "";
        // foreach ($request->input('dicts') as $dict) {
        //     $dicts .= "'$dict', ";
        // }
        // $dicts = rtrim($dicts, ", ");

        $results = DB::select(
            "select * from smj_translations where fra = '{$search}' 
        UNION select * from smj_translations where fra like '{$search}%'
        UNION select * from smj_translations where fra like '%{$search}'
        UNION select * from smj_translations where fra like '%{$search}%'
        UNION SELECT * FROM smj_translations where til = '{$search}'
        UNION select * from smj_translations where til like '{$search}%'
        UNION select * from smj_translations where til like '%{$search}'
        UNION select * from smj_translations where til like '%{$search}%'
        limit 250
        "
        );

        return $results;

        ProcessStatistic::dispatch();
    }

    /**
     * Not implimented in this class
     */
    public function lookup(SearchRequest $request)
    {
        return null;
    }
}
