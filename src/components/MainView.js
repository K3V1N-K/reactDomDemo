import { useEffect } from "react";
import { useState } from "react";

function MainView(args) {
  var [heading, setHeading] = args.headingState;
  var [view, setView] = useState(<HomeView/>)

  //update view if tab changed
  useEffect(function() {
    if(heading == "Home") setView(<HomeView/>);
    else if(heading == "Calandar") setView(<CalandarView/>);
    else if(heading == "Employees") setView(<EmployeesView/>);
  }, [heading])

  //display view
  return(
    <div>
      {view}
    </div>
  )

}


//views-------------------------------------------------------------------------

function HomeView() {
  return(
    <div >
      <h1>TODO: Dashboard View</h1>
    </div >
  )
}
function CalandarView() {
  return(
    <div >
      <h1>TODO: Calandar View</h1>
    </div >
  )
}
function EmployeesView() {
  return(
    <div >
      <h1>TODO: Employee View</h1>
    </div >
  )
}

export default MainView;
