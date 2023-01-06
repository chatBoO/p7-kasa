import React from 'react'
import HomeImg from '../components/HomeImg'
import ImgHome from "../assets/img-home.png"
import CardsContainer from '../components/CardsContainer'


const Home = ({ accommodations }) => {
  return (
    <div>
        <HomeImg backgroundImgHome={ImgHome} text="Chez vous, partout et ailleurs" />
        <main>
        <CardsContainer accommodations={accommodations} />
        </main>
    </div>
  )
}

export default Home