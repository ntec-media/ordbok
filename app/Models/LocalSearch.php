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

        if ($request->input('orderBy') === "norwegian") {
            $results = DB::select(
                "SELECT * FROM smj_translations WHERE fra = '{$search}' AND kredittering IN ({$dicts}) 
            UNION SELECT * FROM smj_translations WHERE fra LIKE '{$search}%' AND kredittering IN ({$dicts})
            UNION SELECT * FROM smj_translations WHERE fra LIKE '%{$search}' AND kredittering IN ({$dicts})
            UNION SELECT * FROM smj_translations WHERE fra LIKE '%{$search}%' AND kredittering IN ({$dicts})
            UNION SELECT * FROM smj_translations WHERE til = '{$search}' AND kredittering IN ({$dicts})
            UNION SELECT * FROM smj_translations WHERE til LIKE '{$search}%' AND kredittering IN ({$dicts})
            UNION SELECT * FROM smj_translations WHERE til LIKE '%{$search}' AND kredittering IN ({$dicts})
            UNION SELECT * FROM smj_translations WHERE til LIKE '%{$search}%' AND kredittering IN ({$dicts})
            limit 250
            "
            );
        } else {
            $results = DB::select(
                "SELECT * FROM smj_translations WHERE til = '{$search}' AND kredittering IN ({$dicts})
            UNION SELECT * FROM smj_translations WHERE til LIKE '{$search}%' AND kredittering IN ({$dicts})
            UNION SELECT * FROM smj_translations WHERE til LIKE '%{$search}' AND kredittering IN ({$dicts})
            UNION SELECT * FROM smj_translations WHERE til LIKE '%{$search}%' AND kredittering IN ({$dicts})
            UNION SELECT * FROM smj_translations WHERE fra = '{$search}' AND kredittering IN ({$dicts}) 
            UNION SELECT * FROM smj_translations WHERE fra LIKE '{$search}%' AND kredittering IN ({$dicts})
            UNION SELECT * FROM smj_translations WHERE fra LIKE '%{$search}' AND kredittering IN ({$dicts})
            UNION SELECT * FROM smj_translations WHERE fra LIKE '%{$search}%' AND kredittering IN ({$dicts})
            limit 250"
            );
        }

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
