import React, { useContext } from 'react'
import "./PlaceOrder.css"
import { StoreContext } from '../../Context/StoreContext'

const PlaceOrder = () => {

  const{getTotalCartAmount} =useContext(StoreContext)


  return (
    <form className='place-order' action="">
      <div className="place-order-left">
        <p className="title">Delivery Information</p>
        <div className="multi-fields">
          <input placeholder='First name' type="text" />
          <input placeholder='Last name' type="text" />
        </div>

        <input type="email" placeholder='Email Address' />
        <input type="text" placeholder='Street' />

        <div className="multi-fields">
          <input placeholder='City' type="text" />
          <input placeholder='State' type="text" />
        </div>

        <div className="multi-fields">
          <input placeholder='Zipcode' type="text" />
          <input placeholder='Country' type="text" />
        </div>
        
        <input type="text " placeholder='Phone' />

      </div>
      <div className="place-order-right">
 <div className="cart-totoal">
          <h2>Cart Total</h2>
          <div>
            <div className="cart-total-detailes">
              <p>Subtotal</p>
              <p>${getTotalCartAmount()}</p>
            </div>
            <hr />
            <div className="cart-total-detailes">
              <p>Delivery fee</p>
              <p>${getTotalCartAmount()=== 0 ? 0 : 2}</p>
            </div>
            <hr />
            <div className="cart-total-detailes">
              <b>Total</b>
              <b>${getTotalCartAmount()=== 0 ? 0 :getTotalCartAmount() + 2}</b>
            </div>
          </div>
          <button >PROCCED TO PAYMENT</button>
        </div>
      </div>
    </form>
  )
}

export default PlaceOrder
