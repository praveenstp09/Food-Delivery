import React, { useState } from 'react'
import './Home.css'
import Header from '../../Header/Header'
import ExploreMenu from '../../ExploreMenu/ExploreMenu'
import { useSearchParams } from 'react-router-dom'
import FoodItems from '../../FoodItems/FoodItems'

const Home = () => {

    const [category,setCategory]=useState("All")

  return (
    <div>
      <Header/>
      <ExploreMenu category={category} setCategory={setCategory}/>
      <FoodItems/>
    </div>
  )
}

export default Home
