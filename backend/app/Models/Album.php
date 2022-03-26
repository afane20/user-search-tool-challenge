<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Album extends Model
{
    use HasFactory;

    protected $fillable = [
        'userId',
        'title',
    ];

    public $timestamps = false;

    public function user(){
        return $this->hasOne(User::class, 'id', 'userId');
    }

    public function photos(){
        return $this->hasMany(Photo::class, 'albumId', 'id');
    }

}
