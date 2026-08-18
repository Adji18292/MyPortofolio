<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    use WithoutModelEvents;

    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // User::factory(10)->create();

        User::factory()->create([
            'name' => 'Adji Setyawan Saputra',
            'email' => 'marqadji93@gmail.com',
        ]);

        \App\Models\Project::create([
            'title' => 'Ticketing System UPT LAB',
            'category' => 'Web Development',
            'description' => 'Platform layanan pengaduan dan permintaan kebutuhan akademis di PT Citra Konsultama Indonesia dengan pelacakan real-time dan notifikasi otomatis.',
            'tech_stack' => ['Laravel', 'React', 'Bootstrap', 'MySQL'],
            'github_link' => 'https://github.com/Adji18292',
            'live_link' => null,
        ]);

        \App\Models\Project::create([
            'title' => 'OmniSight BI',
            'category' => 'AI / Data Science',
            'description' => 'Dashboard Analitik Berbasis AI untuk Memonitor Performa Bisnis dan Prediksi Penjualan Berdasarkan Data Historis.',
            'tech_stack' => ['React.js', 'NestJS', 'Python', 'FastAPI', 'PostgreSQL'],
            'github_link' => 'https://github.com/Adji18292/Capstone-Project',
            'live_link' => null,
        ]);

        \App\Models\Experience::create([
            'company' => 'Pijak x IBM SkillsBuild',
            'role' => 'AI Engineer',
            'duration' => 'Februari 2026 - Present',
            'points' => [
                'Mengembangkan model Machine Learning untuk klasifikasi teks dan analisis sentimen menggunakan TensorFlow dan Python.',
                'Berkolaborasi dalam tim untuk membangun prototipe aplikasi AI yang terintegrasi dengan RESTful API.',
                'Memanfaatkan layanan cloud IBM Watson untuk pemrosesan bahasa alami (NLP).'
            ]
        ]);

        \App\Models\Experience::create([
            'company' => 'NF Academy',
            'role' => 'Full-Stack Web Developer',
            'duration' => 'Agustus 2025 - Januari 2026',
            'points' => [
                'Membangun aplikasi web e-commerce secara end-to-end menggunakan Laravel untuk backend dan React untuk frontend.',
                'Mengimplementasikan sistem otentikasi JWT dan manajemen state menggunakan Redux.',
                'Mengoptimalkan query database MySQL untuk meningkatkan waktu muat halaman hingga 30%.'
            ]
        ]);

        \App\Models\Experience::create([
            'company' => 'BBPMGB LEMIGAS',
            'role' => 'IT Support Internship',
            'duration' => 'Januari 2024 - Maret 2024',
            'points' => [
                'Memberikan dukungan teknis kepada staf terkait permasalahan perangkat keras dan perangkat lunak.',
                'Membantu dalam pemeliharaan jaringan lokal (LAN) dan memastikan konektivitas stabil.',
                'Melakukan instalasi dan konfigurasi sistem operasi serta aplikasi pada workstation baru.'
            ]
        ]);
        $this->call([
            ArticleSeeder::class,
        ]);
    }
}
