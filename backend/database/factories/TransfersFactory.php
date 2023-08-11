<?php

namespace Database\Factories;

use App\Models\Cars;
use App\Models\Travellers;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Model>
 */
class TransfersFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            "travellers_id" => mt_rand(1,Travellers::count()),
            "cars_id" => mt_rand(1,Cars::count()),
            "journey_date" => fake()->dateTime(),
            "journey_starting_point" => fake()->text(),
            "journey_ending_point" =>  fake()->text(),
        ];
    }
}
