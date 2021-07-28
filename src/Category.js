import React from "react";

const Category = ({categories, filterItem}) => {
return (
    
    <div className="btn-container">

        {categories.map((category, index) => {
            return (
                <button 
                type="button" 
                key={index} 
                className="filter-btn" 
                onClick={() => { filterItem(category);}}>{category}</button>);
        })}
    </div>
);
}

export default Category;


 {/* <button className="filter-btn" onClick={() =>{
            filterItem('all')
        }}>
            All
        </button>
        <button className="filter-btn" onClick={() =>{
            filterItem('breakfast')
        }}>
            breakfast
        </button>
        <button className="filter-btn" onClick={() =>{
            filterItem('lunch')
        }}>
            lunch
        </button>
  
        <button className="filter-btn" onClick={() =>{
            filterItem('shakes')
        }}>
           shakes
        </button>

        <button className="filter-btn" onClick={() =>{
            filterItem('pizza')
        }}>
           Pizza
        </button> */}