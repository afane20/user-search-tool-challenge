<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\File;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        User::truncate();

        $json = File::get("database/data/users.json");
        $users = json_decode($json);

        foreach ($users as $key => $value) {
            User::create([
                "name" => $value->name,
                "username" => $value->username,
                "email" => $value->email,
                "address" => $value->address,
                "phone" => $value->phone,
                "website" => $value->website,
                "company" => $value->company,
            ]);
        }
    }
}
