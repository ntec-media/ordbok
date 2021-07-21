<?php

namespace App\Http\Controllers;

use App\Models\Statistic;
use Illuminate\Http\Request;

class StatisticsController extends Controller
{
    public function __construct()
    {
        $this->statistic = new Statistic();
    }

    /**
     * Return searches for the current week, monday-sunday.
     *
     * Can be improved for spesified week in the future.
     */
    public function week(Request $request)
    {
        return $this->statistic->getWeekly();
    }

    /**
     * Return searchs for the current month, 1-31.
     */
    public function month(Request $request)
    {
        return $this->statistic->getMonthly();
    }

    /**
     * Return searches for the current year, January-December
     */
    public function year(Request $request)
    {
        return $this->statistic->getYearly();
    }
}
