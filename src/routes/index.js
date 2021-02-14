import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Footer from "../layouts/Footer";
import Navbar from "../layouts/Navbar";
import Contacts from "../pages/Contacts";
import Depreciation from "../pages/Depreciation";
import Home from "../pages/Home";
import Taxes from "../pages/Taxes";

const  MainRoutes = () =>{
  return (
    <Router>
     <Navbar/>
        <Route exact path="/" component={Home} />
        <Route path="/taxes" component={Taxes} />
        <Route path="/depreciation" component={Depreciation} />
        <Route path="/contacts" component={Contacts} />
        <Footer/>
    </Router>
  );
}


export default MainRoutes;
