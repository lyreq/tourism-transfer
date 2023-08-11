<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Model>
 */
class TravellersFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            "name" => fake()->firstName(),
            "surname" =>  fake()->firstName(),
            "phone_number" => fake()->phoneNumber(),
            "travellers_type" => mt_rand(1,3),
            "hospital" => fake()->text(10),
            "hospital_staff" => fake()->firstName() . " " . fake()->lastName()
        ];
    }
}
