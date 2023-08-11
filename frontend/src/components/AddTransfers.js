import React, { useEffect, useState } from "react";
import axios from "axios";
import Nav from "./Nav";



const AddTransfers = () => {
    const [travellers, setTravellers] = useState([]);
    const [cars, setCars] = useState([]);
    useEffect(() => {
        async function fetchCars() {
            try {
                const response = await axios.get("http://127.0.0.1:8000/api/cars");
                setCars(response.data.results);
            } catch (error) {
                console.error("Error fetching travellers:", error);
            }
        }

        fetchCars();
    }, []);
    useEffect(() => {
        async function fetchTravellers() {
            try {
                const response = await axios.get("http://127.0.0.1:8000/api/travellers");
                setTravellers(response.data.results);
            } catch (error) {
                console.error("Error fetching travellers:", error);
            }
        }

        fetchTravellers();
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const travellers_id = formData.get("travellers_id");
        const cars_id = formData.get("cars_id");
        const journey_date = formData.get("journey_date");
        const journey_starting_point = formData.get("journey_starting_point");
        const journey_ending_point = formData.get("journey_ending_point");

        try {
            const response = await axios.post("http://127.0.0.1:8000/api/transfers", {
                travellers_id: travellers_id,
                cars_id: cars_id,
                journey_date: journey_date,
                journey_starting_point: journey_starting_point,
                journey_ending_point: journey_ending_point,
            });

            alert("Transfer added successfully");
            e.target.reset();
        } catch (error) {
            console.error("Error adding car:", error);
        }
    };


    return (
        <div className="container">
            <Nav />
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Traveller</label>
                    <select className="form-control" name="travellers_id" id="travellers_id">
                        {travellers.map(traveller => (
                            <option key={traveller.id} value={traveller.id}>{traveller.name + " " + traveller.surname}</option>
                        ))}
                    </select>
                </div>
                <div className="form-group">
                    <label>Car</label>
                    <select className="form-control" name="cars_id" id="cars_id">
                        {cars.map(car => (
                            <option key={car.id} value={car.id}>{car.brand + " " + car.model}</option>
                        ))}
                    </select>
                </div>
                <div className="form-group">
                    <label>Journey Date</label>
                    <input className="form-control" type="datetime-local" id="journey_date" name="journey_date" />
                </div>
                
                <div className="form-group">
                    <label>Journey Starting Point</label>
                    <input className="form-control" type="text" id="journey_starting_point" name="journey_starting_point" />
                </div>
                <div className="form-group">
                    <label>Journey Ending Point</label>
                    <input className="form-control" type="text" id="journey_ending_point" name="journey_ending_point" />
                </div>

                <br />
                <input className="btn btn-primary" value={"Add Transfer"} type="submit" />

            </form>
        </div>
    );
};

export default AddTransfers;
