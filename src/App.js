import { useState } from "react";
import SideList from './components/SideList.js';
import NavBar from './components/NavBar.js';
import MainView from './components/MainView.js';

function App() {
  var listHeadingState = useState("Home");

  return (
    <div>
      <NavBar headingState={listHeadingState}/>
      <SideList headingState={listHeadingState} onSelect={function(item){console.log("hi" + item)}} />
      <MainView headingState={listHeadingState}/>
    </div>
  );
}


export default App;
