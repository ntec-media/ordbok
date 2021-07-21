<?php

namespace App\Models;

use DateTime;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Statistic extends Model
{
    use HasFactory;

    public $timestamps = false;

    protected $fillable = [
        'date',
        'searches',
    ];

    public function registerSearch()
    {
        // TODO: IMPLEMENT QUEUE.
        $stats = $this::firstOrNew(['date' => new DateTime('today')]);
        $stats->searches = $stats->searches + 1;
        $stats->save();
    }

    /**
     * Return searches for the current week, monday-sunday.
     *
     * Can be improved for spesified week in the future.
     */
    public function getWeekly()
    {
        $dates = $this->getDatesInWeek((new DateTime(date('Y/m/d')))->format('W'));
        $data = $this::whereIn('date', $dates)->get();

        return $data;
    }

    /**
     * Return searchs for the current month, 1-31.
     */
    public function getMonthly()
    {
        return $this::whereBetween('date', [date('Y-m-01'), date('Y-m-t')])->get();
    }

    /**
     * Return searches for the current year, January-December
     */
    public function getYearly()
    {
        $data = [];
        for ($i = 1; $i < 13; $i++) {
            $monthly = $this::whereBetween('date', [date("Y-$i-01"), date("Y-$i-t")])->get();
            $searches = 0;
            for ($j = 0; $j < $monthly->count(); $j++) {
                $searches += $monthly[$j]->searches;
            }
            $data[$i - 1] = $searches;
        }

        return $data;
    }

    /**
     * Return array of dates in string form for a given week.
     */
    private function getDatesInWeek($weekNumber)
    {
        $arr = [];
        for ($i = 0; $i < 7; $i++) {
            $arr[$i] = (new DateTime())->setISODate(2021, $weekNumber, $i + 1)->format('Y/m/d');
        }

        return $arr;
    }
}
