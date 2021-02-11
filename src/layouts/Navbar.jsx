import React from 'react'
import "./navbar.css"

const Navbar = () => {
    return (
        <header id="header">
        <nav class="navbar navbar-expand-lg navbar-light fixed-top" id="nav-bar">
          <a class="navbar-brand" rel="home" href="#home" title="MaxOff furnitures">
            <img style={{maxWidth: "80%", width:"100px", height:"50px"}} alt="img" src="https://www.contamoney.com/wp-content/uploads/2014/04/contabilidad-gestorias.png" id="header-img"/>
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav ml-auto">
              <li class="nav-item active"><a class="nav-link" href="#home">Home</a></li>
              <li class="nav-item"><a class="nav-link" href="#main">Depreciacion</a></li>
              <li class="nav-item"><a class="nav-link" href="#contact">Contactos</a></li>
              <li class="nav-item"><a class="nav-link" href="https://goo.gl/maps/9HaN4pfzGLhcEMna9">Direccion</a></li>
            </ul>
          </div>
        </nav>
        </header>
    )
}

export default Navbar
