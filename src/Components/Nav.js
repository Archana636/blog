import React from "react";

import { Link } from "react-router-dom";


 function Nav(){

  return(
        <div className="navbar">
          <div className="logo">ZyBisys</div>
           <ul className="nav-links">
              <Link to="/">Home</Link>
              <Link to="/about">About</Link>
              
           </ul>
           

        </div>
  );
}export default Nav;