<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;

class UserController extends Controller
{
    public function users(){
        $users = User::get();
        return response()->json($users);
    }

    public function allData(){
        $users = User::with('albums','albums.photos')
        ->get();
        return response()->json($users);
    }

}
