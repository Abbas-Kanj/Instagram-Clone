<?php

namespace App\Http\Controllers;
use App\Models\Post;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\File;

class PostController extends Controller
{

    public function getAllPosts(){
        $posts = Post::with('user:id,username')->get();

        return response()->json($posts);
    }
 
    public function getUserPosts($id){
        $user = User::findOrFail($id);
        $posts = Post::where('user_id', $id)->get();

        return response()->json($posts);
    }

    public function createPost(Request $request, $id){
        $user = User::findOrFail($id);

        if ($request->hasFile('image')) {
            $file = $request->file('image');
            $extension = $file->getClientOriginalExtension();
            $filename = time() . '.' . $extension;
            $file->move(public_path('/post_images/'), $filename);
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

        if (File::exists(public_path('/post_images/') . $post->image)) {
            File::delete(public_path('/post_images/') . $post->image);
        }
        
        return response()->json($post);
    }
}
