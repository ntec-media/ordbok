<?php

namespace App\Models;

use App\Http\Requests\SearchRequest;
use App\Interfaces\SearchInterface;
use Illuminate\Pagination\Paginator;
use Illuminate\Support\Facades\DB;

class LocalSearch implements SearchInterface
{
    public function __construct()
    {
        $this->statistic = new Statistic();
    }

    public function words(SearchRequest $request)
    {
        $currentPage = $request->input('page');
        Paginator::currentPageResolver(function () use ($currentPage) {
            return $currentPage;
        });

        if ($currentPage == 1) {
            $query1 = DB::table('ord_norsk_samisk_BACKUP')
            ->where('fra', $request->input('search'))
            ->whereIn('kredittering', $request->input('dicts'))
            ->get();

            $query4 = DB::table('ord_norsk_samisk_BACKUP')
            ->where('til', $request->input('search'))
            ->whereIn('kredittering', $request->input('dicts'))
            ->get();
        }

        $query2 = DB::table('ord_norsk_samisk_BACKUP')
        ->where('fra', 'like', '%' . $request->input('search'))
        ->whereIn('kredittering', $request->input('dicts'))
        ->paginate(25, ['*']);

        $query3 = DB::table('ord_norsk_samisk_BACKUP')
        ->where('fra', 'like', $request->input('search') . '%')
        ->whereIn('kredittering', $request->input('dicts'))
        ->paginate(25, ['*']);

        $query5 = DB::table('ord_norsk_samisk_BACKUP')
        ->where('til', 'like', '%' . $request->input('search'))
        ->whereIn('kredittering', $request->input('dicts'))
        ->paginate(25, ['*']);

        $query6 = DB::table('ord_norsk_samisk_BACKUP')
        ->where('til', 'like', $request->input('search') . '%')
        ->whereIn('kredittering', $request->input('dicts'))
        ->paginate(25, ['*']);

        $query7 = DB::table('ord_norsk_samisk_BACKUP')
        ->where('fra', 'like', '%' . $request->input('search') . '%')
        ->whereIn('kredittering', $request->input('dicts'))
        ->paginate(10, ['*']);

        $query8 = DB::table('ord_norsk_samisk_BACKUP')
        ->where('til', 'like', '%' . $request->input('search') . '%')
        ->whereIn('kredittering', $request->input('dicts'))
        ->paginate(10, ['*']);

        if ($currentPage == 1) {
            return $query1
            ->merge($query2->items())
            ->merge($query3->items())
            ->merge($query4)
            ->merge($query5->items())
            ->merge($query6->items())
            ->merge($query7->items())
            ->merge($query8->items());
        } else {
            return array_merge($query2->items(), $query3->items(),  $query5->items(), $query6->items(), $query7->items(), $query8->items());
        }
    }

    /**
     * Not implimented in this class
     */
    public function lookup(SearchRequest $request)
    {
        return null;
    }
}
