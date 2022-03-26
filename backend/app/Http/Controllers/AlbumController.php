<?php

namespace App\Http\Controllers;

use App\Models\Album;
use Illuminate\Http\Request;

class AlbumController extends Controller
{
    public function albums(){
        $albums = Album::get();
        return response()->json($albums);
    }
}
