import React, { useEffect, useState } from "react";
import axios from "axios";
import Nav from "./Nav";

import { useParams } from "react-router-dom";

const EditCars = () => {
    const { id } = useParams();

    const [travellersData, setTravellersData] = useState({ name: "", surname: "", phone_number: "", travellers_type: "", hospital: "", hospital_staff: "" });


    useEffect(() => {
        async function fetchCarData() {
            try {
                const response = await axios.get(`http://127.0.0.1:8000/api/travellers/${id}`);
                setTravellersData(response.data.results);
            } catch (error) {
                console.error("Error fetching car data:", error);
            }
        }


        fetchCarData();
    }, [id]);


    const changetravellersDataHandler = (e) => {
        setTravellersData({
            ...travellersData,
            [e.target.name]: e.target.value
        });
        console.log(travellersData);
    }
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
            const response = await axios.put(`http://127.0.0.1:8000/api/travellers/edit/${id}`, {
                name: name,
                surname: surname,
                phone_number: phone_number,
                travellers_type: travellers_type,
                hospital: hospital,
                hospital_staff: hospital_staff,
            });
            alert("Traveller editted successfully");
        } catch (error) {
            console.error("Error adding car:", error);
        }
    };

    return (
        <div className="container">
            <Nav />
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Name</label>
                    <input className="form-control" type="text" id="name" name="name" onChange={e => changetravellersDataHandler(e)} value={travellersData.name} />
                </div>
                <div className="form-group">
                    <label>surname</label>
                    <input className="form-control" type="text" id="surname" name="surname" onChange={e => changetravellersDataHandler(e)} value={travellersData.surname} />
                </div>
                <div className="form-group">
                    <label>Phone Number</label>
                    <input className="form-control" type="text" id="phone_number" name="phone_number" onChange={e => changetravellersDataHandler(e)} value={travellersData.phone_number} />
                </div>
                <div className="form-group">
                    <label>Travellers Type</label>
                    <select className="form-control" type="text" id="travellers_type" value={travellersData.travellers_type} name="travellers_type">
                        <option value={1}>TYPE 1</option>
                        <option value={2}>TYPE 2</option>
                        <option value={3}>TYPE 3</option>
                    </select>

                </div>
                <div className="form-group">
                    <label>Hospital</label>
                    <input className="form-control" type="text" id="hospital" name="hospital" onChange={e => changetravellersDataHandler(e)} value={travellersData.hospital} />
                </div>
                <div className="form-group">
                    <label>Hospital Type</label>
                    <input className="form-control" type="text" id="hospital_staff" name="hospital_staff" onChange={e => changetravellersDataHandler(e)} value={travellersData.hospital_staff} />
                </div>

                <br />
                <input className="btn btn-primary" value={"Update"} type="submit" />

            </form>
        </div>
    );
};

export default EditCars;
