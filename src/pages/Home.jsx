import React from 'react'
import ImgHome from "../assets/img-home.webp"
import Banner from '../components/Banner'
import CardsContainer from '../components/CardsContainer'



const Home = () => {
  return (
    <div>
        <Banner backgroundImg={ImgHome} about={false} text="Chez vous, partout et ailleurs" />
        <main>
        <CardsContainer/>
        </main>
    </div>
  )
}

export default Home