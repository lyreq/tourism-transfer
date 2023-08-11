<?php

namespace App\Http\Controllers;

use App\Http\Requests\DriversStoreRequest;
use App\Http\Requests\DriversUpdateRequest;
use App\Models\Drivers;
use Illuminate\Http\Request;

class DriversController extends Controller
{
    public function index()
    {
        $drivers = Drivers::all();

        return response()->json([
            'results' => $drivers
        ]);
    }
    public function show($id)
    {
        $drivers = Drivers::where("id", $id)->first();

        return response()->json([
            'results' => $drivers
        ]);
    }
    public function update(DriversUpdateRequest $request, $id)
    {
        $data = $request->validated();
        try {
            $drivers = Drivers::find($id);
            if (!$drivers) {
                return response()->json([
                    'message' => 'Drivers Not Found.'
                ], 404);
            }

            $drivers->update($data);
            // Return Json Response
            return response()->json([
                'message' => "Drivers successfully updated."
            ], 200);
        } catch (\Exception $e) {
            // Return Json Response
            return response()->json([
                'message' => "Something went really wrong!"
            ], 500);
        }
    }
    public function destroy($id)
    {
        $drivers = Drivers::where("id", $id)->delete();

        return response()->json([
            'results' => "Drivers deleted successfully"
        ]);
    }
    public function store(DriversStoreRequest $request)
    {
        $data = $request->validated();
        Drivers::create($data);
        return response()->json([
            'results' => "Driver added successfully"
        ]);
    }
}
