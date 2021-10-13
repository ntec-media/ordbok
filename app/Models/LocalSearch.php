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
        $orderBy = $request->input('orderBy') === "sami" ? "samisk" : "norsk";

        $query1 = DB::table('smj_translations')
            ->select()
            ->where([
                ["til", "LIKE", "%{$search}%"],
                ["oversatt_til", "LIKE", "{$orderBy}"],
            ]);

        $query2 = DB::table('smj_translations')
        ->select()
        ->where([
            ["til", "LIKE", "%{$search}"],
            ["oversatt_til", "LIKE", "{$orderBy}"],
        ])
        ->union($query1);

        $query3 = DB::table('smj_translations')
        ->select()
        ->where([
            ["til", "LIKE", "{$search}%"],
            ["oversatt_til", "LIKE", "{$orderBy}"],
        ])
        ->union($query2);

        $query4 = DB::table('smj_translations')
        ->select()
        ->where([
            ["til", "LIKE", "{$search}"],
            ["oversatt_til", "LIKE", "{$orderBy}"],
        ])
        ->union($query3);

        $query5 = DB::table('smj_translations')
        ->select()
        ->where([
            ["fra", "LIKE", "%{$search}%"],
            ["oversatt_fra", "LIKE", "{$orderBy}"],
        ])
        ->union($query4);

        $query6 = DB::table('smj_translations')
        ->select()
        ->where([
            ["fra", "LIKE", "%{$search}"],
            ["oversatt_fra", "LIKE", "{$orderBy}"],
        ])
        ->union($query5);

        $query7 = DB::table('smj_translations')
        ->select()
        ->where([
            ["fra", "LIKE", "{$search}%"],
            ["oversatt_fra", "LIKE", "{$orderBy}"],
        ])
        ->union($query6);

        $query8 = DB::table('smj_translations')
        ->select()
        ->where([
            ["fra", "LIKE", "{$search}"],
            ["oversatt_fra", "LIKE", "{$orderBy}"],
        ])
        ->union($query7)
        ->limit(50)
        ->get()
        ;

        return $query8;

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
