<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use Faker\Core\File;

class UserController extends Controller
{
    public function getUser($id){
        $user = User::findOrFail($id);
        return response()->json($user);
    }

    public function updateUser(Request $request, $id){
        $user = User::findOrFail($id);

        if ($request->hasFile('profile_picture')) {
            $file = $request->file('profile_picture');
            $extension = $file->getClientOriginalExtension();
            $filename = time() . '.' . $extension;
            $file->move(public_path('/profile_pictures/'), $filename);
        }

        // if (File::exists(public_path('/profile_pictures/') . $user->profile_picture)) {
        //     File::delete(public_path('/profile_pictures/') . $user->profile_picture);
        // }

        $request->validate([
            'fullname' => 'required|string|max:25',
            'biography' => 'required|string|max:255',
        ]);

        $user->update([
            'fullname' => $request->fullname,
            'biography' => $request->biography,
            'profile_picture' => $filename,
        ]);

        return response()->json($user);
    }
}
