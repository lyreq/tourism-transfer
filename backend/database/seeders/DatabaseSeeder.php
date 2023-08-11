<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;

use Database\Factories\CarsFactory;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        $this->call([
            DriversSeeder::class,
            CarsSeeder::class,
            TravellersSeeder::class,
            TransfersSeeder::class,
        
        ]);
    }
}
