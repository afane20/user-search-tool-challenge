<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Photo extends Model
{
    use HasFactory;

    protected $fillable = [
        'albumId',
        'title',
        'url',
        'thumbnailUrl',
    ];

    public $timestamps = false;

    public function album(){
        return $this->hasOne(Album::class, 'id', 'albumId');
    }
}
