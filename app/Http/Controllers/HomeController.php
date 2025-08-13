<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use App\Models\Article;
use App\Models\Project;
use Illuminate\Http\Request;

class HomeController extends Controller
{
    public function index()
    {
        $projects = Project::select('id', 'title', 'slug', 'thumbnail')->get();
        $articles = Article::select('id', 'title', 'slug', 'lang')->get();

        return Inertia::render('Home', [
            'projects' => $projects,
            'articles' => $articles,
        ]);
    }
}
