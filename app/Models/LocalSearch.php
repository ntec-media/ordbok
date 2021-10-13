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

        $query1 = DB::table('smj_translations')
            ->select()
            ->where("til", "LIKE", "%{$search}%");

        $query2 = DB::table('smj_translations')
            ->select()
            ->where("til", "LIKE", "%{$search}")
            ->union($query1);

        $query3 = DB::table('smj_translations')
            ->select()
            ->where("til", "LIKE", "{$search}%")
            ->union($query2);

        $query4 = DB::table('smj_translations')
            ->select()
            ->where("til", "LIKE", "{$search}")
            ->union($query3);

        $query5 = DB::table('smj_translations')
            ->select()
            ->where("fra", "LIKE", "%{$search}%")
            ->union($query4);

        $query6 = DB::table('smj_translations')
            ->select()
            ->where("fra", "LIKE", "%{$search}")
            ->union($query5);

        $query7 = DB::table('smj_translations')
            ->select()
            ->where("fra", "LIKE", "{$search}%")
            ->union($query6);

        $query8 = DB::table('smj_translations')
            ->select()
            ->where("fra", "LIKE", "{$search}")
            ->union($query7)
            ->limit(50)
            ->orderBy('oversatt_fra', $orderBy, 'oversatt_til', $orderBy)
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
