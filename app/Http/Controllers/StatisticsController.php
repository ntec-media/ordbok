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

    public function week(Request $request)
    {
        return $this->statistic->getWeekly();
    }

    public function month(Request $request)
    {
        return $this->statistic->getMonthly();
    }

    public function year(Request $request)
    {
        return $this->statistic->getYearly();
    }
}
