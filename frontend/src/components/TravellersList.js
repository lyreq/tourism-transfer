import React, { useEffect, useState } from "react";
import axios from "axios";
import Nav from "./Nav";

const TravellersList = () => {
    const [travellersData, setTravellersData] = useState([]);
    const [filteredTravellersData, setFilteredTravellersData] = useState([]);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const result = await axios.get("http://127.0.0.1:8000/api/travellers");
            setTravellersData(result.data.results);
            setFilteredTravellersData(result.data.results);
        } catch (err) {
            console.log("something went wrong");
        }
    };

    const handleRemoveTraveller = async (travellerId) => {
        try {
            await axios.delete(`http://127.0.0.1:8000/api/travellers/${travellerId}`);
            fetchData();
        } catch (error) {
            console.error("Error deleting travellers:", error);
        }
    };

    const handleFilterChange = (event) => {
        const selectedTravellersType = parseInt(event.target.value);
        if (selectedTravellersType === 0) {
            setFilteredTravellersData(travellersData); 
        } else {
            const filteredData = travellersData.filter(
                (traveller) => traveller.travellers_type === selectedTravellersType
            );
            setFilteredTravellersData(filteredData);
        }
    };

    return (
        <div className="container">
            <Nav />
            <h1>Travellers</h1>
            <br/>
            <label style={{float:"left"}}>  Fiter Traveller Type</label>
          
            <select className="form-control" onChange={handleFilterChange}>
                <option value={0}>All</option>
                <option value={1}>TYPE 1</option>
                <option value={2}>TYPE 2</option>
                <option value={3}>TYPE 3</option>
            </select>
            <br/>
            <a href="/travellers/add" className="btn btn-primary" style={{ float: "right" }}>+ Add Travellers</a>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Full Name</th>
                        <th scope="col">Phone Number</th>
                        <th scope="col">Travellers Type</th>
                        <th scope="col">Hospital</th>
                        <th scope="col">Hospital Staff</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {filteredTravellersData.map((travellers, i) => {
                        return (
                            <tr>
                                <th scope="row">{i + 1}</th>
                                <td>{travellers.name + " " + travellers.surname}</td>
                                <td>{travellers.phone_number}</td>
                                <td>
                                    {travellers.travellers_type === 1 && "TYPE 1"}
                                    {travellers.travellers_type === 2 && "TYPE 2"}
                                    {travellers.travellers_type === 3 && "TYPE 3"}
                                </td>
                                <td>{travellers.hospital}</td>
                                <td>{travellers.hospital_staff}</td>
                                <td>
                                    <button className="btn btn-danger" style={{ marginRight: "10px" }} onClick={() => handleRemoveTraveller(travellers.id)}>Remove</button>
                                    <a href={`/travellers/edit/${travellers.id}`} className="btn btn-info">Edit</a>
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


export default TravellersList;