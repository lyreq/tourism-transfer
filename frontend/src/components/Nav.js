import React, { } from "react";

const Nav = () => {
    return (
       
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <a className="navbar-brand" href="/">LOGO</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <a className="nav-item nav-link" href="/cars">Cars</a>
                        <a className="nav-item nav-link" href="/drivers">Drivers</a>
                        <a className="nav-item nav-link" href="/travellers">Travellers</a>
                        <a className="nav-item nav-link" href="/transfers">Transfers</a>
                        <a className="nav-item nav-link" href="/transfers-day">Transfers of the Day</a>
                    </div>
                </div>
            </nav>
      
    )
}


export default Nav;