import React, {useState} from "react"
import Category from "./Category";
import data from "./data"
import Menu from "./Menu"

function App() {

  const [foodItems, setFoodItems] = useState(data)
    //Function for filtering the menu array and creating category buttons
  const filterButton = (category) => {
      const newData = data.filter((item) => {
        item.category === category;
        setFoodItems(newData)
      })
    }
  return (
    <section className="menu section">
      <div className="title">
          <h2>Our Menu</h2>
          <div className="underline"></div>
         
      </div>
      <Category />
    <Menu props={foodItems}/>
    </section>
 
  );
}

export default App;

// {console.log(foodItems)}