<?php

namespace App\Http\Controllers;

use App\Http\Requests\TransfersStoreRequest;
use App\Http\Requests\TransfersUpdateRequest;
use App\Models\Transfers;
use Illuminate\Http\Request;
use Carbon\Carbon;

class TransfersController extends Controller
{
    public function index()
    {
        $transfers = Transfers::all();

        return response()->json([
            'results' => $transfers
        ]);
    }
    public function todayTransfers()
    {
        $today = Carbon::today();

        $transfers = Transfers::whereDate('journey_date', $today)->get();

        return response()->json([
            'results' => $transfers
        ]);
    }
    public function show($id)
    {
        $drivers = Transfers::where("id", $id)->first();

        return response()->json([
            'results' => $drivers
        ]);
    }

    public function destroy($id)
    {
        $drivers = Transfers::where("id", $id)->delete();

        return response()->json([
            'results' => "Transfer deleted successfully"
        ]);
    }

    public function update(TransfersUpdateRequest $request, $id)
    {
        $data = $request->validated();
        try {
            $transfers = Transfers::find($id);
            if (!$transfers) {
                return response()->json([
                    'message' => 'Transfers Not Found.'
                ], 404);
            }

            $transfers->update($data);
            // Return Json Response
            return response()->json([
                'message' => "Transfers successfully updated."
            ], 200);
        } catch (\Exception $e) {
            // Return Json Response
            return response()->json([
                'message' => "Something went really wrong!"
            ], 500);
        }
    }

    public function store(TransfersStoreRequest $request)
    {
        $data = $request->validated();
        Transfers::create($data);
        return response()->json([
            'results' => "Transfer added successfully"
        ]);
    }
}
