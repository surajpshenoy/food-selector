import React, {useState} from "react"
import Category from "./Category";
import data from "./data"
import Menu from "./Menu"

//Filtering the data for getting the unique categories
const categoryArray = ['all', ...new Set(data.map((item) => item.category))];
//console.log(categoryArray);


function App() {

  const [foodItems, setFoodItems] = useState(data)
  const [categories, setCategories] = useState(categoryArray)
  
  //Function for filtering the menu array and creating category buttons
  const filterButton = (category) => {

    if(category === 'all')
      {
        setFoodItems(data);
        return ;
      }
      const newData = data.filter((item) => item.category === category); 
      setFoodItems(newData)
    }
  return (
    <section className="menu section">
      <div className="title">
          <h2>Our Menu</h2>
          <div className="underline"></div>
         
      </div>
    <Category categories={categories} filterItem={filterButton}/>
    <Menu props={foodItems}/>
    </section>
 
  );
}

export default App;

// {console.log(foodItems)}