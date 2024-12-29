import React, { useState } from 'react'
import './Home.css'
import Headers from '../../components/Header/Header'
import Menu from '../../components/Menu/Menu'
import FoodDisplay from '../../components/FoodDisplay/FoodDisplay'
import AppDownload from '../../components/App/AppDownload'

const Home = () => {
   const [category, setCategory] = useState("all");
  return (
    <div>
        <Headers/>
        <Menu category={category} setCategory={setCategory} />
        <FoodDisplay category={category} />
        <AppDownload />
    </div>
  
  )
}

export default Home
