import React from 'react'
import "./AppDownlode.css"
import { assets } from '../../assets/assets'

const AppDownlode = () => {
  return (
    <div className='appDownlode' id='appDownlode'>
        <p>For better Experiences downlode <br></br>
        Tomato App</p>
        <div className="appDownlode-platform">
            <img src={assets.play_store} alt="" />
            <img src={assets.app_store} alt="" />
        </div>
      
    </div>
  )
}

export default AppDownlode
