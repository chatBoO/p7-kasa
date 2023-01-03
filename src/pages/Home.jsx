import React from 'react'
import Header from '../components/Header'
import HomeImg from '../components/HomeImg'
import ImgHome from "../assets/img-home.png"
import CardsContainer from '../components/CardsContainer'


const Home = ({ logements }) => {
  return (
    <div>
        <Header />
        <HomeImg backgroundImg={ImgHome} text="Chez vous, partout et ailleurs" />
        <main>
        <CardsContainer logements={logements} />
        </main>
    </div>
  )
}

export default Home