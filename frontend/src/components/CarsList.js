import React, { useEffect, useState } from "react";
import axios from "axios";
import Nav from "./Nav";

const CarsList = () => {

    const [carsData, setCarsData] = useState([])
    const [driversData, setDriversData] = useState([])

    useEffect(() => {
        fetchData();
    }, [])

    const fetchData = async () => {
        try {
            const result = await axios.get("http://127.0.0.1:8000/api/cars");
            setCarsData(result.data.results);

            const driversResult = await axios.get("http://127.0.0.1:8000/api/drivers");
            setDriversData(driversResult.data.results);
        } catch (err) {
            console.log("something went wrong")
        }
    }

    const handleRemoveCar = async (carId) => {
        try {
            await axios.delete(`http://127.0.0.1:8000/api/cars/${carId}`);
            fetchData();
        } catch (error) {
            console.error("Error deleting car:", error);
        }
    
    };
    return (
        

        <div className="container">
            <Nav />
            <h1>Cars</h1>
            <a href="/cars/add" className="btn btn-primary" style={{float:"right"}}>+ Add Cars</a>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Brand</th>
                        <th scope="col">Model</th>
                        <th scope="col">Driver</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {
                        carsData.map((cars, i) => {
                            const driver = driversData.find(driver => driver.id === cars.drivers_id);

                            return (
                                <tr>
                                    <th scope="row">{i + 1}</th>
                                    <td>{cars.brand}</td>
                                    <td>{cars.model}</td>
                                    <td>{driver ? driver.name + " " + driver.surname : "N/A"}</td>
                                    <td>
                                        <button className="btn btn-danger" style={{marginRight:"10px"}} onClick={() => handleRemoveCar(cars.id)}>Remove</button>
                                        <a href={`/cars/edit/${cars.id}`} className="btn btn-info">Edit</a>
                                    </td>
                                </tr>
                            )
                        })
                    }


                </tbody>
            </table>
        </div>

    )
}


export default CarsList;