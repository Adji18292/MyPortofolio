<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class ArticleSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        \App\Models\Article::create([
            'title' => 'Eksperimen dengan K-Nearest Neighbors di AI',
            'content' => '<h2>Mengenal KNN</h2><p>K-Nearest Neighbors adalah salah satu algoritma paling simpel di Machine Learning...</p>',
        ]);

        \App\Models\Article::create([
            'title' => 'Mengapa saya memilih Laravel dan React',
            'content' => '<h2>Kombinasi Sempurna</h2><p>Laravel menyediakan arsitektur backend yang kokoh, sementara React memanjakan user dengan UI yang dinamis...</p>',
        ]);
    }
}
