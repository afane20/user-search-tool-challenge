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

    public function allData(Request $request){
        $search = $request->search;
        $start = 0;
        $itemsPerPage = $request->pagination ?? 5;
        $users = User::with('albums','albums.photos')
        ->where('name', 'LIKE', "%{$search}%")
        ->skip($start)
        ->take($itemsPerPage)
        ->get();

        return response()->json($users);
    }

}
