<?php

namespace App\Http\Controllers;

use App\Http\Requests\TravellersStoreRequest;
use App\Http\Requests\TravellersUpdateRequest;
use App\Models\Travellers;
use Illuminate\Http\Request;

class TravellersController extends Controller
{
    public function index()
    {
        $travellers = Travellers::all();

        return response()->json([
            'results' => $travellers
        ]);
    }

    public function destroy($id)
    {
        $travellers = Travellers::where("id", $id)->delete();

        return response()->json([
            'results' => "Traveller deleted successfully"
        ]);
    }
    public function show($id)
    {
        $travellers = Travellers::where("id", $id)->first();

        return response()->json([
            'results' =>  $travellers
        ]);
    }

    public function store(TravellersStoreRequest $request)
    {
        $data = $request->validated();
        Travellers::create($data);
        return response()->json([
            'results' => "Car added successfully"
        ]);
    }
    public function update(TravellersUpdateRequest $request, $id)
    {
        $data = $request->validated();
        try {
            // Find User
            $travellers = Travellers::find($id);
            if (!$travellers) {
                return response()->json([
                    'message' => 'Travellers Not Found.'
                ], 404);
            }

            $travellers->update($data);
            // Return Json Response
            return response()->json([
                'message' => "Travellers successfully updated."
            ], 200);
        } catch (\Exception $e) {
            // Return Json Response
            return response()->json([
                'message' => "Something went really wrong!"
            ], 500);
        }
    }
}
