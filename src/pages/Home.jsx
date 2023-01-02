import React from 'react'
import Header from '../components/Header'
import HomeImg from '../components/HomeImg'
import ImgHome from "../assets/img-home.png"
import CardsContainer from '../components/CardsContainer'

const Home = () => {
  return (
    <div>
        <Header />
        <HomeImg backgroundImg={ImgHome} />
        <main>
        <CardsContainer />
        </main>
    </div>
  )
}

export default Home