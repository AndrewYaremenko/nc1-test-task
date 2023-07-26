<?php

namespace App\Http\Controllers;

use App\Models\Post;
use Illuminate\Http\Request;

class PostController extends Controller
{
    public function index(Request $request)
    {
        $posts = Post::paginate(3);

        if ($request->ajax()) {
            return response()->json($posts);
        } else {
            return view('posts');
        }
    }
}
