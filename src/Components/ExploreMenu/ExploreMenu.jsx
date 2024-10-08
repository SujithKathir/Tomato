import "./ExploreMenu.css"
import { menu_list } from "../../assets/assets"
import React from 'react'

const ExploreMenu = ({category, setCategory}) => {
  return (
    <div className="explore-menu " id="explore-menu">
      <h1>Explore our Menu</h1>
      <p className="explore-menu-text">Choose from our diverse menu featuring a delicatable array of dishes. Our mission is to satisify your craving and elivate your dining expriences.One delicius meal at one time.</p>
      <div className="explore-menulist">
        {menu_list.map((item,index)=>{
          return(
            <div onClick={()=>setCategory(prev=>prev===item.menu_name?"All":item.menu_name)} key={index} className="explore-menulist-items">
              <img className={category===item.menu_name?"active":""} src={item.menu_image} alt="" />
              <p>{item.menu_name}</p>
            </div>
          )
        })}
      </div>
      <hr></hr>
    </div>
  )
}

export default ExploreMenu
