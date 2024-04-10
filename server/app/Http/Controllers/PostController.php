<?php

namespace App\Http\Controllers;
use App\Models\Post;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\File;

class PostController extends Controller
{
    public function getAllPosts(){
        $posts = Post::all();
        return response()->json($posts);
    }

    public function createPost(Request $request, $id){
        $user = User::findOrFail($id);

        if ($request->hasFile('image')) {
            $file = $request->file('image');
            $extension = $file->getClientOriginalExtension();
            $filename = time() . '.' . $extension;
            $file->move(public_path('/profile_pictures/'), $filename);
        }

        $request->validate([
            'caption' => 'required|string|max:255',
            'hashtags' => 'required|string|max:255',
        ]);

        $post = Post::create([
            'caption' => $request->caption,
            'hashtags' => $request->hashtags,
            'image' => $filename,
            'user_id' => $id
        ]);
        
        return response()->json($post);
    }
}
