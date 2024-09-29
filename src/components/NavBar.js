import { useState } from "react";
import { useEffect } from "react";
import dataIO from '../dataIO.js';


function NavBar(args) {
  var [heading, setHeading] = args.headingState;
  var [selIdx, setSelIdx] = useState(0);

  var onClick = function(tab) {
    if(tab == "Home"){
      setHeading("Home")
      setSelIdx(0);
    }
    else if(tab == "Calandar") {
      setHeading("Calandar")
      setSelIdx(1);
    }
    else if(tab == "Employees"){
      setHeading("Employees")
      setSelIdx(2);
    }
  }

  return(
    <nav className="nav nav-tabs" style={{borderBottom: "solid", borderColor: "#0d6efd", backgroundColor: "#E0E0E0"}}>
      <a className={selIdx == 0 ? "nav-link active" : "nav-link"} href="#" onClick={function(){onClick("Home")}}>Home</a>
      <a className={selIdx == 1 ? "nav-link active" : "nav-link"} href="#" onClick={function(){onClick("Calandar")}}>Calandar</a>
      <a className={selIdx == 2 ? "nav-link active" : "nav-link"} href="#" onClick={function(){onClick("Employees")}}>Employees</a>
    </nav>
  );

}


export default NavBar;
