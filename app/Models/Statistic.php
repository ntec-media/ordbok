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

    public function getWeekly()
    {
        $dates = $this->getDatesInWeek((new DateTime(date('Y/m/d')))->format('W'));
        $data = $this::whereIn('date', $dates)->get();

        return $data;
    }

    public function getMonthly()
    {
        $test = [date('Y-m-01'), date('Y-m-t')];
        $dates = $this::whereBetween('date', [date('Y-m-01'), date('Y-m-t')])->get();

        return $dates;
    }

    public function getYearly()
    {
        // Logic
        return 1;
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
