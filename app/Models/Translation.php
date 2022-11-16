<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Pagination\Paginator;
use App\Jobs\ProcessStatistic;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class Translation extends Model
{
    use HasFactory;

    protected $table = 'smj_translations';

    protected $fillable = [
        'fra',
        'til',
        'kildeid',
        'oversatt_fra',
        'oversatt_til',
        'kredittering',
        'publisert',
        'brukerforslag',
    ];

    public $timestamps = false;

    public static function localSearch(Request $request)
    {
        $search = $request->input('search');
        $orderBy = $request->input('orderBy') === "sami" ? "DESC" : "ASC";
        $currentPage = $request->input('page');
        Paginator::currentPageResolver(function () use ($currentPage) {
            return $currentPage;
        });

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
            ->orderBy('oversatt_fra', $orderBy)
            ->simplePaginate(25, ['*']);


        ProcessStatistic::dispatch();

        return $query8;
    }
}
