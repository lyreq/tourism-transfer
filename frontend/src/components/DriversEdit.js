import React, { useEffect, useState } from "react";
import axios from "axios";
import Nav from "./Nav";

import { useParams } from "react-router-dom";

const DriversEdit = () => {
    const { id } = useParams();

    const [driversData, setdriversData] = useState({ name: "", surname: "" });


    useEffect(() => {
        async function fetchCarData() {
            try {
                const response = await axios.get(`http://127.0.0.1:8000/api/drivers/${id}`);
                setdriversData(response.data.results);
            } catch (error) {
                console.error("Error fetching driver data:", error);
            }
        }

       
        fetchCarData();
    }, [id]);


    const changedriversDataHandler = (e) => {
        setdriversData({
            ...driversData,
            [e.target.name]: e.target.value
        });
        console.log(driversData);
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const name = formData.get("name");
        const surname = formData.get("surname");

        try {
            const response = await axios.put(`http://127.0.0.1:8000/api/drivers/edit/${id}`,{
                name: name,
                surname: surname,
            });

          alert("Driver editted successfully");
        } catch (error) {
            console.error("Error adding driver:", error);
        }
    };

    return (
        <div className="container">
            <Nav />
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Name</label>
                    <input className="form-control" type="text" id="name" name="name" onChange={e => changedriversDataHandler(e)} value={driversData.name} />
                </div>
                <div className="form-group">
                    <label>Surname</label>
                    <input className="form-control" type="text" id="surname" name="surname" onChange={e => changedriversDataHandler(e)} value={driversData.surname} />
                </div>
              
                <br />
                <input className="btn btn-primary" value={"Update"} type="submit" />

            </form>
        </div>
    );
};

export default DriversEdit;
