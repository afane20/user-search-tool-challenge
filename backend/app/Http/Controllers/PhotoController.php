<?php

namespace App\Http\Controllers;

use App\Models\Photo;
use Illuminate\Http\Request;

class PhotoController extends Controller
{
    public function photos(){
        $photos = Photo::get();
        return response()->json($photos);
    }
}
