<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;

class UserController extends Controller
{
    public function getUser($id){
        $user = User::findOrFail($id);
        return response()->json($user);
    }
}
