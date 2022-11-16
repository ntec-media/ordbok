<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

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
}
