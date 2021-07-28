import React from "react";

const Category = ({filterItem}) => {
return (

    <div className="btn-container">

        <button className="filter-btn" onClick={() =>{
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
    </div>

);
}


export default Category;