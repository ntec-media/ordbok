<?php

namespace App\Models;

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
        $stats = $this::firstOrNew(['date' => date('Y/m/d')]);
        $stats->searches = $stats->searches + 1;
        $stats->save();
    }

    public function getWeekly()
    {
        // Logic
    }

    public function getMonthly()
    {
        // Logic
        return 1;
    }

    public function getYearly()
    {
        // Logic
        return 1;
    }
}
