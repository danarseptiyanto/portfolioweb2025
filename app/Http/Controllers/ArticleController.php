<?php

namespace App\Http\Controllers;

use App\Models\Article;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ArticleController extends Controller
{
    public function index($slug)
    {
        $article = Article::where('slug', $slug)->first();
        return Inertia::render('Article', [
            'slug' => $slug,
            'article' => $article
        ]);
    }
}
