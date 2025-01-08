<?php

namespace App\Filament\Resources;

use Filament\Forms;
use Filament\Tables;
use App\Models\Project;
use Filament\Forms\Form;
use Filament\Tables\Table;
use Filament\Resources\Resource;
use Filament\Forms\Components\FileUpload;
use Illuminate\Database\Eloquent\Builder;
use App\Filament\Resources\ProjectResource\Pages;
use Illuminate\Database\Eloquent\SoftDeletingScope;
use App\Filament\Resources\ProjectResource\RelationManagers;
use Livewire\Features\SupportFileUploads\TemporaryUploadedFile;

class ProjectResource extends Resource
{
    protected static ?string $model = Project::class;

    protected static ?string $navigationIcon = 'heroicon-o-rectangle-stack';

    public static function form(Form $form): Form
    {
        return $form
            ->schema([
                Forms\Components\Section::make('Project Details')
                    ->description('Add your project details here')
                    ->schema([
                        Forms\Components\Grid::make(2)
                            ->schema([
                                Forms\Components\TextInput::make('title'),
                                Forms\Components\TextInput::make('slug'),
                                Forms\Components\DateTimePicker::make('project-date'),
                                Forms\Components\DateTimePicker::make('date-created'),
                                Forms\Components\TextInput::make('client'),
                                Forms\Components\TextInput::make('website'),
                            ]),
                        Forms\Components\FileUpload::make('thumbnail')
                            ->directory('thumbnail')
                            ->visibility('public'),
                    ]),
                Forms\Components\Section::make('Thumbnail')
                    ->description('Upload the thumbnail for the project that will show up on homepage')
                    ->collapsible()
                    ->schema([
                        Forms\Components\MarkdownEditor::make('description')->columnSpan('full')
                            ->fileAttachmentsDirectory('project')
                            ->fileAttachmentsVisibility('public'),
                    ]),
                Forms\Components\Section::make('Thumbnail')
                    ->description('Upload the thumbnail for the project that will show up on homepage')
                    ->collapsible()
                    ->schema([
                        Forms\Components\FileUpload::make('images')
                            ->multiple()
                            ->directory('images')
                            ->visibility('public')
                            ->reorderable()
                            ->appendFiles(),
                    ])
            ]);
    }

    public static function table(Table $table): Table
    {
        return $table
            ->columns([
                Tables\Columns\TextColumn::make('title'),
            ])
            ->filters([
                //
            ])
            ->actions([
                Tables\Actions\EditAction::make(),
            ])
            ->bulkActions([
                Tables\Actions\BulkActionGroup::make([
                    Tables\Actions\DeleteBulkAction::make(),
                ]),
            ]);
    }

    public static function getRelations(): array
    {
        return [
            //
        ];
    }

    public static function getPages(): array
    {
        return [
            'index' => Pages\ListProjects::route('/'),
            'create' => Pages\CreateProject::route('/create'),
            'edit' => Pages\EditProject::route('/{record}/edit'),
        ];
    }
}
