<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Travellers extends Model
{
    use HasFactory;
    protected $table = "travellers";
    protected $fillable = ["name","surname","phone_number","travellers_type","hospital","hospital_staff"];
}
