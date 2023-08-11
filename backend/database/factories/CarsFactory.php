<?php

namespace Database\Factories;

use App\Models\Drivers;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Model>
 */
class CarsFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'brand' => fake()->text("10"),
            'model' => fake()->text("10"),
            'drivers_id' => mt_rand(1, Drivers::count()),
        ];
    }
}
