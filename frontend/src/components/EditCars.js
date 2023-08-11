import React, { useEffect, useState } from "react";
import axios from "axios";
import Nav from "./Nav";

import { useParams } from "react-router-dom";

const EditCars = () => {
    const { id } = useParams();

    const [carsData, setCarsData] = useState({ brand: "", model: "", drivers_id: "" });
    const [drivers, setDrivers] = useState([]);

    useEffect(() => {
        async function fetchCarData() {
            try {
                const response = await axios.get(`http://127.0.0.1:8000/api/cars/${id}`);
                setCarsData(response.data.results);
            } catch (error) {
                console.error("Error fetching car data:", error);
            }
        }

        async function fetchDrivers() {
            try {
                const response = await axios.get("http://127.0.0.1:8000/api/drivers");
                setDrivers(response.data.results);
            } catch (error) {
                console.error("Error fetching drivers:", error);
            }
        }

      
        fetchCarData();
        fetchDrivers();
    }, [id]);
    const changeCarsDataHandler = (e) => {
        setCarsData({
            ...carsData,
            [e.target.name]: e.target.value
        });
        console.log(carsData);
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const brand = formData.get("brand");
        const model = formData.get("model");
        const drivers_id = formData.get("drivers_id");

        try {
            const response = await axios.put(`http://127.0.0.1:8000/api/cars/edit/${id}`, {
                brand: brand,
                model: model,
                drivers_id: drivers_id
            });
            alert("Car editted successfully");
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
                    <input className="form-control" type="text" id="brand" name="brand" onChange={e => changeCarsDataHandler(e)} value={carsData.brand} />
                </div>
                <div className="form-group">
                    <label>Model</label>
                    <input className="form-control" type="text" id="model" name="model" onChange={e => changeCarsDataHandler(e)} value={carsData.model} />
                </div>
                <div className="form-group">
                    <label>Sürücü Seçiniz</label>
                    <select className="form-control" name="drivers_id" onChange={e => changeCarsDataHandler(e)}  id="drivers_id" value={carsData.drivers_id}>
                        {drivers.map(driver => (
                            <option key={driver.id} value={driver.id}>{driver.name}</option>
                        ))}
                    </select>
                </div>
                <br />
                <input className="btn btn-primary" value={"Update"} type="submit" />

            </form>
        </div>
    );
};

export default EditCars;
