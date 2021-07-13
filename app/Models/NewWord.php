<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class NewWord extends Model
{
    use HasFactory;

    protected $fillable = [
        'norwegian',
        'sami',
        'description',
        'email',
    ];
}
