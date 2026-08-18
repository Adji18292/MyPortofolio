<?php

namespace App\Filament\Resources\Experiences\Schemas;

use Filament\Forms\Components\TextInput;
use Filament\Forms\Components\Textarea;
use Filament\Schemas\Schema;

class ExperienceForm
{
    public static function configure(Schema $schema): Schema
    {
        return $schema
            ->components([
                TextInput::make('company')
                    ->required(),
                TextInput::make('role')
                    ->required(),
                TextInput::make('duration')
                    ->required(),
                Textarea::make('points')
                    ->required()
                    ->columnSpanFull(),
            ]);
    }
}
