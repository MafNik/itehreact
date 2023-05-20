import React from "react";
 
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <div className="navbar">
     
      <Link to="/" className="navbar-items">Pocetna  </Link>
       
 
 

        <Link to="/kontakt" className="navbar-items"> Kontakt </Link>
    </div>
  );
}
export default NavBar;