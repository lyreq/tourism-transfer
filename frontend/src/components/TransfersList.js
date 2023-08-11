import React, { useEffect, useState } from "react";
import axios from "axios";
import Nav from "./Nav";

const TransfersList = () => {

    const [transfersData, settransfersData] = useState([])
    const [travellersData, setTravellersData] = useState([])
    const [carsData, setCarsData] = useState([])

    useEffect(() => {
        fetchData();
    }, [])

    const fetchData = async () => {
        try {
            const result = await axios.get("http://127.0.0.1:8000/api/transfers");
            settransfersData(result.data.results);

            const travellersResult = await axios.get("http://127.0.0.1:8000/api/travellers");
            setTravellersData(travellersResult.data.results);

            const carsResult = await axios.get("http://127.0.0.1:8000/api/cars");
            setCarsData(carsResult.data.results);

        } catch (err) {
            console.log("something went wrong")
        }
    }

    const handleRemoveTransfer = async (transferId) => {
        try {
            await axios.delete(`http://127.0.0.1:8000/api/transfers/${transferId}`);
            fetchData();
        } catch (error) {
            console.error("Error deleting transfer:", error);
        }
    
    };
    return (
        

        <div className="container">
            <Nav />
            <h1>Transfers</h1>
            <a href="/transfers/add" className="btn btn-primary" style={{float:"right"}}>+ Add Transfers</a>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Cars</th>
                        <th scope="col">Traveller Full Name</th>
                        <th scope="col">Journey Date</th>
                        <th scope="col">Journey Start Point</th>
                        <th scope="col">Journey End Point</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {
                        transfersData.map((transfers, i) => {
                            const traveller = travellersData.find(traveller => traveller.id === transfers.travellers_id);
                            const car = carsData.find(car => car.id === transfers.cars_id);

                            return (
                                <tr>
                                    <th scope="row">{i + 1}</th>
                                    <td>{car ? car.brand + " " + car.model : "N/A"}</td>
                                    <td>{traveller ? traveller.name + " " + traveller.surname : "N/A"}</td>
                                    <td>{transfers.journey_date}</td>
                                    <td>{transfers.journey_starting_point}</td>
                                    <td>{transfers.journey_ending_point}</td>
                                    <td>
                                        <button className="btn btn-danger" style={{marginRight:"10px"}} onClick={() => handleRemoveTransfer(transfers.id)}>Remove</button>
                                        <a href={`/transfers/edit/${transfers.id}`} className="btn btn-info">Edit</a>
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


export default TransfersList;