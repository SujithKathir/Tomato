import React, { useContext, useState } from 'react'
import "./Navbar.css"
import { assets } from '../../assets/assets'
import {Link} from "react-router-dom"
import { StoreContext } from '../../Context/StoreContext'

const Navbar = ({setShowLogin}) => {

  const [menu, setMenu] = useState("home")

  const {getTotalCartAmount} =useContext(StoreContext)

  return (
    <div className='navbar'>
     <img src={assets.logo} alt="" />
     <ul className="navbar-menu">
        <Link to="/" onClick={()=>setMenu("home")} className={menu==="home"?"active":""}>Home</Link>
        <a href='#explore-menu' onClick={()=>setMenu("menu")} className={menu==="menu"?"active":""}>Menu</a>
        <a href='#appDownlode' onClick={()=>setMenu("mobile-app")} className={menu==="mobile-app"?"active":""}>Mobile-App</a>
        <a href='#footer' onClick={()=>setMenu("contact-us")} className={menu==="contact-us"?"active":""}>Contact us</a>
     </ul>

     <div className="nav-right">
       <Link to="/"> <img src={assets.search_icon} alt="" /></Link>
        <div className="navbar-search-icon">
         <Link to={"/cart"}>   <img src={assets.basket_icon} alt="" /></Link>
            <div className={getTotalCartAmount()===0 ?"" : "Dot"}></div>
        </div>
        <button onClick={()=>setShowLogin(true)}>Sign in</button>
     </div>
    </div>
  )
}

export default Navbar
