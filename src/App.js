import React, {useState} from "react"
import data from "./data"

function App() {

  const [foodItems, setFoodItems] = useState(data)
  return (
    <div className="App">
      <h3>Testing the Food Selector page</h3>
      {console.log(foodItems)}
    </div>
  );
}

export default App;
