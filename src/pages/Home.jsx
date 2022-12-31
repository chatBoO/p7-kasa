import React from 'react'
import Header from '../components/Header'
import HomeImg from '../components/HomeImg'
import ImgHome from "../assets/img-home.png"

const Home = () => {
  return (
    <div>
        <Header />
        <HomeImg backgroundImg={ImgHome} />
    </div>
  )
}

export default Home