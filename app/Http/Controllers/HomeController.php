<?php

namespace App\Http\Controllers;

use App\Models\Project;
use Inertia\Inertia;
use Illuminate\Http\Request;

class HomeController extends Controller
{
    public function index()
    {
        $projects = Project::select('id', 'title', 'slug', 'thumbnail')->get();

        return Inertia::render('Home', [
            'projects' => $projects,
        ]);
    }
}
