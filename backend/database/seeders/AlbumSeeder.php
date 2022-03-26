<?php

namespace Database\Seeders;

use App\Models\Album;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\File;

class AlbumSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Album::truncate();

        $json = File::get("database/data/albums.json");
        $albums = json_decode($json);

        foreach ($albums as $key => $value) {
            Album::create([
                "userId" => $value->userId,
                "title" => $value->title
            ]);
        }
    }
}
