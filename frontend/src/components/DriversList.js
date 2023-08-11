import React, { useEffect, useState } from "react";
import axios from "axios";
import Nav from "./Nav";

const DriversList = () => {

    const [driversData, setdriversData] = useState([])

    useEffect(() => {
        fetchData();
    }, [])

    const fetchData = async () => {
        try {
            const result = await axios.get("http://127.0.0.1:8000/api/drivers");
            setdriversData(result.data.results);
        } catch (err) {
            console.log("something went wrong")
        }
    }

    const handleRemoveDrivers = async (driverId) => {
        try {
            await axios.delete(`http://127.0.0.1:8000/api/drivers/${driverId}`);
            fetchData();
        } catch (error) {
            console.error("Error deleting drivers:", error);
        }

    };
    return (


        <div className="container">
            <Nav />
            <h1>Drivers</h1>
            <a href="/drivers/add" className="btn btn-primary" style={{ float: "right" }}>+ Add Drivers</a>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Full Name</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {
                        driversData.map((drivers, i) => {
                            return (
                                <tr>
                                    <th scope="row">{i + 1}</th>
                                    <td>{drivers.name + " " + drivers.surname}</td>
                                    <td>
                                        <button className="btn btn-danger" style={{ marginRight: "10px" }} onClick={() => handleRemoveDrivers(drivers.id)}>Remove</button>
                                        <a href={`/drivers/edit/${drivers.id}`} className="btn btn-info">Edit</a>
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


export default DriversList;