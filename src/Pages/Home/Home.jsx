import React, { useState } from 'react'
import "./Home.css"
import Header from '../../Components/Header/Header'
import ExploreMenu from '../../Components/ExploreMenu/ExploreMenu'
import FoodDisplay from '../../Components/FoodDisplay/FoodDisplay'
import AppDownlode from '../../Components/AppDownlode/AppDownlode'

const Home = () => {

  const [category, setCategory] = useState("All")
  return (
    <div className='Home'>
      <Header />
      <ExploreMenu category={category} setCategory={setCategory} />
      <FoodDisplay category={category} />
      <AppDownlode/>
    </div>
  )
}

export default Home
