<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Transfers extends Model
{
    use HasFactory;
    protected $table = "transfers";
    protected $fillable = ["travellers_id","cars_id","journey_date","journey_starting_point","journey_ending_point"];
}
