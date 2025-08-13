<?php

namespace App\Filament\Resources;

use App\Filament\Resources\ArticleResource\Pages;
use Illuminate\Support\Str;
use App\Filament\Resources\ArticleResource\RelationManagers;
use App\Models\Article;
use Filament\Forms;
use Filament\Forms\Form;
use Filament\Resources\Resource;
use Filament\Tables;
use Filament\Tables\Table;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\SoftDeletingScope;

class ArticleResource extends Resource
{
    protected static ?string $model = Article::class;

    protected static ?string $navigationIcon = 'heroicon-o-rectangle-stack';

    public static function form(Form $form): Form
    {
        return $form
            ->schema([
                Forms\Components\Section::make('Article Details')
                    ->description('Add your Article details here')
                    ->schema([
                        Forms\Components\Grid::make(2)
                            ->schema([
                                Forms\Components\TextInput::make('title'),
                                Forms\Components\TextInput::make('slug')
                                    ->required()
                                    ->rule('alpha_dash')
                                    ->afterStateUpdated(
                                        fn($state, callable $set) =>
                                        $set('slug', Str::slug($state)) // Format only when slug is updated manually
                                    ),
                                Forms\Components\DateTimePicker::make('date-created'),
                                Forms\Components\Select::make('lang')
                                    ->options([
                                        'en' => 'English',
                                        'id' => 'Indonesian',
                                    ])
                                    ->default('en'),
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
                            ->fileAttachmentsDirectory('article')
                            ->fileAttachmentsVisibility('public'),
                    ]),
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
            'index' => Pages\ListArticles::route('/'),
            'create' => Pages\CreateArticle::route('/create'),
            'edit' => Pages\EditArticle::route('/{record}/edit'),
        ];
    }
}
