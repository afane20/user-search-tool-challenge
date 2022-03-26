<?php

namespace Database\Seeders;

use App\Models\Photo;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\File;

class PhotoSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Photo::truncate();

        $json = File::get("database/data/photos.json");
        $photos = json_decode($json);

        foreach ($photos as $key => $value) {
            Photo::create([
                "albumId" => $value->albumId,
                "title" => $value->title,
                "url" => $value->url,
                "thumbnailUrl" => $value->thumbnailUrl,
            ]);
        }
    }
}
