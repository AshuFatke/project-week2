import React, { useContext } from 'react'
import './FoodDisplay.css'
import { StoreContext } from '../../context/StoreContext'
import FoodItem from '../Fooditem/FoodItem'
const FoodDisplay = ({category}) => {
    
    const {food_list} = useContext(StoreContext)
  return (
    <div className='fooddisplay m-6' id='food-display'>
        <h2>Top dishes near you </h2>
        <div className="food-display-list">
            
            {food_list.map((item,index)=>{
              {console.log(category,item.category)}
              if(category==="all" || category===item.category){
                return<FoodItem key={index} id={item._id} name={item.name} price={item.price} description={item.description} image={item.image}/>

              }
                
            })}

        </div>
        
         
      
    </div>
  )
}

export default FoodDisplay
