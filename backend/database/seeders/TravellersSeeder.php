<?php

namespace Database\Seeders;

use App\Models\Travellers;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class TravellersSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Travellers::factory(10)->create();
    }
}
