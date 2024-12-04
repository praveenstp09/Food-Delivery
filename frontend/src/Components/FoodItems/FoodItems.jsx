import React from "react";
import { food_list } from '../../assets/assets'
import './foodItem.css'

const FoodItems = () => {
  return (
    <div className="food-items">
      <h1>Food Items</h1>
      <div className="items">
        {food_list.map((item,index)=>{
            return(
                <div className="card">
                    <img src={item.image}/>
                    <h3>{item.name}</h3>
                    <div className="price-btn">
                    <p>${item.price}</p>
                    <p>Add To Cart</p>
                    </div>
                    
                    {/* <p>{item.description}</p> */}
                    {/* <p>{item.category}</p> */}
                </div>
            )
        })}
      </div>
    </div>
  );
};

export default FoodItems;
