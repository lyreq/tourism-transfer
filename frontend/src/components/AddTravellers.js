import React, { useEffect, useState } from "react";
import axios from "axios";
import Nav from "./Nav";
const AddTravellers = () => {

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const name = formData.get("name");
        const surname = formData.get("surname");
        const phone_number = formData.get("phone_number");
        const travellers_type = formData.get("travellers_type");
        const hospital = formData.get("hospital");
        const hospital_staff = formData.get("hospital_staff");

        try {
            const response = await axios.post("http://127.0.0.1:8000/api/travellers", {
                name: name,
                surname: surname,
                phone_number: phone_number,
                travellers_type: travellers_type,
                hospital: hospital,
                hospital_staff: hospital_staff,
            });
            alert("Car Traveller successfully");
            e.target.reset();
        } catch (error) {
            console.error("Error adding Traveller:", error);
        }
    };


    return (
        <div className="container">
            <Nav />
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Name</label>
                    <input className="form-control" type="text" id="name" name="name" />
                </div>
                <div className="form-group">
                    <label>surname</label>
                    <input className="form-control" type="text" id="surname" name="surname" />
                </div>
                <div className="form-group">
                    <label>Phone Number</label>
                    <input className="form-control" type="text" id="phone_number" name="phone_number" />
                </div>
                <div className="form-group">
                    <label>Travellers Type</label>
                    <select className="form-control" type="text" id="travellers_type" name="travellers_type">
                        <option value={1}>TYPE 1</option>
                        <option value={2}>TYPE 2</option>
                        <option value={3}>TYPE 3</option>
                    </select>
                </div>
                <div className="form-group">
                    <label>Hospital</label>
                    <input className="form-control" type="text" id="hospital" name="hospital"/>
                </div>
                <div className="form-group">
                    <label>Hospital Type</label>
                    <input className="form-control" type="text" id="hospital_staff" name="hospital_staff" />
                </div>
               
                <br />
                <input className="btn btn-primary" value={"Submit"} type="submit" />

            </form>
        </div>
    );
};

export default AddTravellers;
