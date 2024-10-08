import React, { useContext, useState, useEffect } from 'react'
import "./FoodItems.css"
import { assets } from '../../assets/assets'
import { StoreContext } from '../../Context/StoreContext'

const FoodItems = ({ id, name, price, description, image }) => {

  const [countfood, setCountFood] = useState(0)
  const { cartItems, addToCart, removeFromCart } = useContext(StoreContext)


  return (
    <div className='foodItems'>
      <div className="food-item-img-container">
        <img className="food-item-image" src={image} alt="" />

        {!cartItems[id]
          ? <img className='add' onClick={() => addToCart(id)} src={assets.add_icon_white} alt="" />
          : <div className='food-item-counter' >
            <img onClick={() => removeFromCart(id)} src={assets.remove_icon_red} alt="" />
            <p>{cartItems[id]}</p>
            <img onClick={() =>addToCart(id)} src={assets.add_icon_green} alt="" />
          </div>
        }
      </div>

      <div className="food-item-info">
        <div className="food-item-name-rating">
          <p>{name}</p>
          <img src={assets.rating_starts} alt="" />
        </div>
        <p className="food-item-description">{description} </p>
        <p className="foot-item-price">${price}</p>
      </div>
    </div>
  )
}

export default FoodItems
