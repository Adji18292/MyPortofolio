<?php

namespace App\Filament\Resources\Projects\Schemas;

use Filament\Forms\Components\TextInput;
use Filament\Forms\Components\Textarea;
use Filament\Schemas\Schema;

class ProjectForm
{
    public static function configure(Schema $schema): Schema
    {
        return $schema
            ->components([
                TextInput::make('title')
                    ->required(),
                \Filament\Forms\Components\Select::make('category')
                    ->options([
                        'Web Development' => 'Web Development',
                        'AI / Data Science' => 'AI / Data Science',
                        'Mobile App' => 'Mobile App',
                        'UI/UX Design' => 'UI/UX Design',
                    ])
                    ->required(),
                Textarea::make('description')
                    ->required()
                    ->columnSpanFull(),
                \Filament\Forms\Components\TagsInput::make('tech_stack')
                    ->required()
                    ->columnSpanFull(),
                TextInput::make('github_link'),
                TextInput::make('live_link'),
            ]);
    }
}
