<?php

namespace App\Http\Controllers;

use App\Http\Requests\CarsStoreRequest;
use App\Http\Requests\CarsUpdateRequest;
use App\Models\Cars;
use Illuminate\Http\Request;

class CarsController extends Controller
{
    public function index()
    {
        $cars = Cars::all();

        return response()->json([
            'results' => $cars
        ]);
    }

    public function show($id)
    {
        $cars = Cars::where("id", $id)->first();

        return response()->json([
            'results' =>  $cars
        ]);
    }
    public function destroy($id)
    {
        $cars = Cars::where("id", $id)->delete();

        return response()->json([
            'results' => "Car deleted successfully"
        ]);
    }

    public function store(CarsStoreRequest $request)
    {
        $data = $request->validated();
        Cars::create($data);
        return response()->json([
            'results' => "Car added successfully"
        ]);
    }
    public function update(CarsUpdateRequest $request, $id)
    {
        try {
            // Find User
            $cars = Cars::find($id);
            if (!$cars) {
                return response()->json([
                    'message' => 'Cars Not Found.'
                ], 404);
            }

            //echo "request : $request->image";
            $cars->brand = $request->brand;
            $cars->model = $request->model;
            $cars->drivers_id = $request->drivers_id;

            // Update User
            $cars->save();

            // Return Json Response
            return response()->json([
                'message' => "Cars successfully updated."
            ], 200);
        } catch (\Exception $e) {
            // Return Json Response
            return response()->json([
                'message' => "Something went really wrong!"
            ], 500);
        }
    }
}
