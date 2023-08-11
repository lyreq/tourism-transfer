import React, { useEffect, useState } from "react";
import axios from "axios";
import Nav from "./Nav";
const AddCars = () => {
    const [drivers, setDrivers] = useState([]);
    useEffect(() => {
        async function fetchDrivers() {
            try {
                const response = await axios.get("http://127.0.0.1:8000/api/drivers");
                setDrivers(response.data.results);
            } catch (error) {
                console.error("Error fetching drivers:", error);
            }
        }

        fetchDrivers();
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const brand = formData.get("brand");
        const model = formData.get("model");
        const drivers_id = formData.get("drivers_id");

        try {
            const response = await axios.post("http://127.0.0.1:8000/api/cars", {
                brand: brand,
                model: model,
                drivers_id: drivers_id
            });

            alert("Car added successfully");
            e.target.reset();
        } catch (error) {
            console.error("Error adding car:", error);
        }
    };

    
    return (
        <div className="container">
            <Nav/>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Marka</label>
                    <input className="form-control" type="text" id="brand" name="brand" />
                </div>
                <div className="form-group">
                    <label>Model</label>
                    <input className="form-control" type="text" id="model" name="model" />
                </div>
                <div className="form-group">
                    <label>Sürücü Seçiniz</label>
                    <select className="form-control" name="drivers_id" id="drivers_id">
                        {drivers.map(driver => (
                            <option key={driver.id} value={driver.id}>{driver.name + " " + driver.surname}</option>
                        ))}
                    </select>
                </div>
                <br />
                <input className="btn btn-primary" value={"Add Cars"} type="submit" />

            </form>
        </div>
    );
};

export default AddCars;
