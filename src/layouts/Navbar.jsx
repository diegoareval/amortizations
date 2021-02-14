import React from 'react'
import "./navbar.css"
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <header id="header">
        <nav className="navbar navbar-expand-lg navbar-light fixed-top" id="nav-bar">
          <a className="navbar-brand" rel="home" href="#home" title="MaxOff furnitures">
            <img style={{maxWidth: "80%", width:"100px", height:"50px"}} alt="img" src="https://www.contamoney.com/wp-content/uploads/2014/04/contabilidad-gestorias.png" id="header-img"/>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item active"><Link className="nav-link" to="/">Home</Link></li>
              <li className="nav-item"> <Link className="nav-link" to="/depreciation">Depreciation</Link></li>
              <li className="nav-item"> <Link to="/taxes" className="nav-link">Taxes</Link></li>
              <li className="nav-item"> <Link to="/contacts" className="nav-link">Contacts</Link></li>
            </ul>
          </div>
        </nav>
        </header>
    )
}

export default Navbar
