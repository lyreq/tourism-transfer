import React, { useEffect, useState } from "react";
import axios from "axios";
import Nav from "./Nav";

import { useParams } from "react-router-dom";

const DriversAdd = () => {
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const name = formData.get("name");
        const surname = formData.get("surname");

        try {
            const response = await axios.post(`http://127.0.0.1:8000/api/drivers`,{
                name: name,
                surname: surname,
            });

          alert("Driver added successfully");
          e.target.reset();
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
                    <input className="form-control" type="text" id="name" name="name" />
                </div>
                <div className="form-group">
                    <label>Surname</label>
                    <input className="form-control" type="text" id="surname" name="surname"/>
                </div>
              
                <br />
                <input className="btn btn-primary" value={"Submit"} type="submit" />

            </form>
        </div>
    );
};

export default DriversAdd;
