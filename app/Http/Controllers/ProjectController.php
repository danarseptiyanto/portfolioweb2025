<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use App\Models\Project;
use Illuminate\Http\Request;

class ProjectController extends Controller
{
    public function index($slug)
    {
        $project = Project::where('slug', $slug)->first();
        return Inertia::render('Project', [
            'slug' => $slug,
            'project' => $project
        ]);
    }
}
