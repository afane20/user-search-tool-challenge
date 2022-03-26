<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class User extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'username',
        'email',
        'address',
        'phone',
        'website',
        'company',
    ];

    protected $casts = [
        'address' => 'object',
        'company' => 'object',
    ];

    public $timestamps = false;
}
