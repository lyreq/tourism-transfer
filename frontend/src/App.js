import React, { } from "react";
import "./App.css";

import Home from "./components/Home";
import Nav from "./components/Nav";
import Cars from "./components/CarsList";
import CarsEdit from "./components/EditCars";
import AddCars from "./components/AddCars";


import Travellers from "./components/TravellersList";
import TravellersEdit from "./components/EditTravellers";
import AddTravellers from "./components/AddTravellers";

import Drivers from "./components/DriversList"
import DriversEdit from "./components/DriversEdit"
import DriversAdd from "./components/DriversAdd"


import Transfers from "./components/TransfersList"
import TransfersDay from "./components/TransfersDay"
import AddTransfers from "./components/AddTransfers";
import EditTransfers from "./components/EditTransfers";

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />

          <Route exact path="/cars" element={<Cars />} />
          <Route exact path="/cars/edit/:id" element={<CarsEdit />} />
          <Route exact path="/cars/add" element={<AddCars />} />

          <Route exact path="/travellers" element={<Travellers />} />
          <Route exact path="/travellers/edit/:id" element={<TravellersEdit />} />
          <Route exact path="/travellers/add" element={<AddTravellers />} /> 


          <Route exact path="/drivers" element={<Drivers />} />
          <Route exact path="/drivers/edit/:id" element={<DriversEdit />} />
          <Route exact path="/drivers/add" element={<DriversAdd />} /> 

          <Route exact path="/transfers" element={<Transfers />} />
          <Route exact path="/transfers-day" element={<TransfersDay />} />
          <Route exact path="/transfers/add" element={<AddTransfers />} />
          <Route exact path="/transfers/edit/:id" element={<EditTransfers />} />

        </Routes>
      </Router>
    </div>
  );
}

export default App;