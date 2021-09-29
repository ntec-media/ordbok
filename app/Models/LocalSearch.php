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

        $dicts = "";
        foreach ($request->input('dicts') as $dict) {
            $dicts .= "'$dict', ";
        }
        $dicts = rtrim($dicts, ", ");

        $results = DB::select(
            "select * from smj_translations where fra = '{$search}' and kredittering in ({$dicts}) 
        UNION select * from smj_translations where fra like '{$search}%' and kredittering in ({$dicts})
        UNION select * from smj_translations where fra like '%{$search}' and kredittering in ({$dicts})
        UNION select * from smj_translations where fra like '%{$search}%' and kredittering in ({$dicts})
        UNION SELECT * FROM smj_translations where til = '{$search}' and kredittering in ({$dicts})
        UNION select * from smj_translations where til like '{$search}%' and kredittering in ({$dicts})
        UNION select * from smj_translations where til like '%{$search}' and kredittering in ({$dicts})
        UNION select * from smj_translations where til like '%{$search}%' and kredittering in ({$dicts})
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
