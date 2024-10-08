import React, { useContext } from 'react'
import "./Cart.css"
import { StoreContext } from '../../Context/StoreContext'
import { useNavigate } from 'react-router-dom'








const Cart = () => {
  const { removeFromCart, cartItems, food_list, getTotalCartAmount } = useContext(StoreContext)
  const navigate = useNavigate()
  return (
    <div className='cart'>
      <div className="cart-items">
        <div className="cart-item-title">
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <br />
        <hr />
        {food_list.map((item, index) => {
          if (cartItems[item._id] > 0) {
            return (
              <div>
                <div className="cart-items-item cart-item-title" >
                  <img src={item.image} alt="" />
                  <p>{item.name}</p>
                  <p>${item.price}</p>
                  <p>{cartItems[item._id]}</p>
                  <p>${item.price * cartItems[item._id]}</p>
                  <p onClick={() => removeFromCart(item._id)} className='cross'>x</p>
                </div>
                <hr />
              </div>
            )
          }
        })}

      </div>

      <div className="cart-bottom">
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
              <p>${getTotalCartAmount()===0? 0 : 2}</p>
            </div>
            <hr />
            <div className="cart-total-detailes">
              <b>Total</b>
              <b>${ getTotalCartAmount()===0? 0 :getTotalCartAmount() + 2}</b>
            </div>
          </div>
          <button onClick={() => navigate("/order")}>PROCCED TO CHECKOUT</button>
        </div>
        <div className="cart-promocode">
          <div>
            <p>If you have a Promo Code, Enter here.</p>
            <div className="cart-promocode-input">
              <input placeholder='promo code' type="text" />
              <button> submit</button>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Cart
