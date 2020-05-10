import React from "react";
import "./styles.css";

function App() {
  return (
    <div>
      <Header />
      <h1 style={{ fontWeight: 70, 
 
      fontSize: 30 , letterSpacing: 2 , color: "red"}}>Grocery List</h1>
      <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"/>
      <label for="vehicle1"> apple</label><br/>
      
      <input type="checkbox" id="vehicle2" name="vehicle2" value="Car"/>
      <label for="vehicle2"> banana</label><br/>
    </div>
  );
}

function Header() {
  var nameFirst = "Jihun";
  var nameLast = "Park";

  return <h1 className="header"
 
  style={{ fontStyle: "oblique", fontSize: 30 }}
  >Welcome to the Twilight Zone { nameFirst } { nameLast }</h1>
}


export default App;