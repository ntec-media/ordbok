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
        $orderBy = $request->input('orderBy') === "sami" ? "DESC" : "ASC";
        $dictionaries = ["A. Kintel 2013", "Sáme Giellagálldo 2013", "Medisijnalasj báhkogirjje"];


        $query1 = DB::table('smj_translations')
            ->select()
            ->where("til", "LIKE", "%{$search}%")
            ->whereIn('kredittering', $dictionaries);

        $query2 = DB::table('smj_translations')
            ->select()
            ->where("til", "LIKE", "%{$search}")
            ->whereIn('kredittering', $dictionaries);

        $query3 = DB::table('smj_translations')
            ->select()
            ->where("til", "LIKE", "{$search}%")
            ->whereIn('kredittering', $dictionaries);

        $query4 = DB::table('smj_translations')
            ->select()
            ->where("til", "LIKE", "{$search}")
            ->whereIn('kredittering', $dictionaries);

        $query5 = DB::table('smj_translations')
            ->select()
            ->where("fra", "LIKE", "%{$search}%")
            ->whereIn('kredittering', $dictionaries);

        $query6 = DB::table('smj_translations')
            ->select()
            ->where("fra", "LIKE", "%{$search}")
            ->whereIn('kredittering', $dictionaries);

        $query7 = DB::table('smj_translations')
            ->select()
            ->where("fra", "LIKE", "{$search}%")
            ->whereIn('kredittering', $dictionaries);

        $query8 = DB::table('smj_translations')
            ->select()
            ->where("fra", "LIKE", "{$search}")
            ->whereIn('kredittering', $dictionaries)
            ->union($query7)
            ->union($query6)
            ->union($query5)
            ->union($query4)
            ->union($query3)
            ->union($query2)
            ->union($query1)
            ->limit(50)
            ->orderBy('oversatt_fra', $orderBy)
            ->get();

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
