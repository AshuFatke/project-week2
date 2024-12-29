import React, { useContext } from 'react'
import './Placeorder.css'   
import { StoreContext } from '../../context/StoreContext'

const Placeorder = () => {
  

  const {getTotalCartAmount}=useContext(StoreContext)
  return (
    <form className='place-order'>
      <div className="place-order-left">
        <p className='title'>Delivery Information</p>
        <div className="multi-field">
          <input type="text" placeholder='first name' />
          <input type="text" placeholder='Last name' />
        </div>
        <input type="text" placeholder='Email address'/>
        <input type="text" placeholder='street' />
        <div className="multi-field">
          <input type="text" placeholder='city' />
          <input type="text" placeholder='State' />
        </div>
        <div className="multi-field">
          <input type="text" placeholder='Zip code' />
          <input type="text" placeholder='country' />
        </div>
        <input type="text" placeholder='Phone number'/>

      </div>
      <div className="place-order-right">
      <div className="cart-total">
          <h2>Cart Total</h2>
          <div>
          <div className="cart-total-details">
              <p>subTotal</p>
              <p>₹ {getTotalCartAmount()}</p>

            </div>
            <hr />
            <div className="cart-total-details">
              <p>Delivery Fee</p>
              <p>₹ {getTotalCartAmount()===0?0:2}</p>

            </div>
            <hr />
            <div className="cart-total-details">
              <b>Total</b>
              <b>₹ {getTotalCartAmount()===0?0:getTotalCartAmount()+2}</b>
            </div>
          </div>
          <button  >PROCEED TO PAYMENT</button>
        </div>

      </div>
    </form>
  )
}

export default Placeorder
