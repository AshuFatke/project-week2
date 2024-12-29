import React, { useContext} from 'react';
import './FoodItem.css';
import { assets } from '../../assets/assets';
import { StoreContext } from '../../context/StoreContext';


const FoodItem = ({ id, name, price, description, image }) => {
   
    const {cartItems,addTocart, removeFromCart} = useContext(StoreContext);
    

    return (
        <div className="food-item m-7">
            <div className="food-item-ctaineron">
                <img className="food-item-image" src={image} alt="" />
                {!cartItems[id]
                    ?<img className='add' onClick={()=>addTocart(id)} src={assets.add_icon_white} alt="" />
                    :<div className='food-item-counter'>
                        <img onClick={()=>removeFromCart(id)} src={assets.remove_icon_red} alt="" />
                        <p>{cartItems[id]}</p>
                        <img onClick={()=>addTocart(id)} src={assets.add_icon_green} alt="" />

                    </div>


                }

                
            </div>
            <div className="food-item-info">
                <div className="food-item-name-rating">
                    <p>{name}</p>
                    <img src={assets.rating_starts} alt="Rating" />
                </div>
                <p className="food-item-description">{description}</p>
                <p className="food-item-price">Rs{price}/-</p>
            </div>
        </div>
    );
};

export default FoodItem;