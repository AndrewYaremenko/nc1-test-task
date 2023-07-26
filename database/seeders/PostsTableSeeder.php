<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class PostsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('posts')->insert([
            ['title' => 'title1', 'description' => 'description1'],
            ['title' => 'some title 2', 'description' => 'some description for post 2'],
            ['title' => 'title for post 3', 'description' => 'description for post 3'],
            ['title' => 'some title 4', 'description' => 'some description for post 4'],
            ['title' => 'some title 5', 'description' => 'some description for post 5'],
            ['title' => 'title6', 'description' => 'description6'],
            ['title' => 'title for post 7', 'description' => 'description for post 7'],
        ]);
    }
}
