import { useState } from "react";
import { useEffect } from "react";
import dataIO from '../dataIO.js';

//Takes String "heading", string array "items", and onSelect Function
//Passes the value of selected list index to onSelect
function List(args) {
  var [heading, setHeading] = args.headingState;
  var [listItem, setListItem] = useState([]);
  var onSelect = args.onSelect;
  var [selIdx, setSelIdx] = useState(0);

  //update list data if tab changed
  useEffect(function() {
    setListItem(dataIO.getData(heading))
  }, [heading])

  //dont display if home page
  if(heading == "Home") return(<div/>);


  //Handlers--------------------------------------------------------------------

  //handlers for adding at removing from list
  var addItem = function() {
    var newItem = window.prompt("Enter new element", "");
    if(newItem != null || newItem != undefined) {
      var newList = [...listItem, newItem];
      setListItem(newList)
      dataIO.saveData(heading, newList);
    }
  }
  var delItem = function(idx) {
    var confmDel = window.confirm("Do you want to delete " + listItem[idx]);
    if(confmDel) {
      var newList = [...listItem];
      newList.splice(idx, 1);
      setListItem(newList)
      dataIO.saveData(heading, newList);
    }
  }

  //handlers for search bar filter function
  var filterSearch = function(e) {
    var matchCase = false;
    var filterStr = e.target.value;
    if(!matchCase) filterStr = filterStr.toLowerCase();

    //get orginal data
    var ogList = dataIO.getData(heading)
    var newList = [];

    //add matching results to new list
    if(e.target.value != "") {
      for(var i = 0; i < ogList.length; i++) {
        var matchStr = ogList[i];
        if(!matchCase) matchStr = matchStr.toLowerCase()
        if(matchStr.includes(filterStr)) newList.push(ogList[i])
      }
    }
    if(e.target.value == "") newList = [...ogList]; //returns to unfiltered list

    //update state
    setListItem(newList)
  }

  //Turns items list into JSX list element
  var mapFn = function(item, idx) {
    return(
      <li className={selIdx == idx ? "list-group-item active" : "list-group-item"} key={idx}
            onClick={function(){
              setSelIdx(idx) //update selected list item
              onSelect(idx) //pass index to parent
            }}>

        {item}
        <button className="btn btn-danger" style={{float: "right" }} onClick={function(){delItem(idx)}}> Del </button>
      </li>
    )
  };


  //Page JSX--------------------------------------------------------------------
  return(
    <div style={{float:"left", borderRight: "solid", borderColor: "#0d6efd", width: "25vw", height:"100vh", backgroundColor: "#E0E0E0"}}>
      <br/>
      <input type="text" placeholder="Search" style={{ marginLeft:"10%", width: "80%"}} onChange={filterSearch}/>
      <br/><br/>
      <ul className="list-group">
        {listItem.map(mapFn)}
      </ul>
      <div className="col text-center">
        <button className="btn btn-secondary" style={{width:"50%"}} onClick={addItem}> Add More </button>
      </div>
    </div>
  );

}

export default List;
