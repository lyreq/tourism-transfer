<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class TransfersStoreRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array|string>
     */
    public function rules(): array
    {
        return [
            "travellers_id" => "required|string",
            "cars_id" => "required|string",
            "journey_date" => "required|date",
            "journey_starting_point" => "required|string",
            "journey_ending_point" => "required|string",
        ];
    }
}
