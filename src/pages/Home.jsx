import React from 'react'
import ImgHome from "../assets/img-home.webp"
import Banner from '../components/Banner'
import CardsContainer from '../components/CardsContainer'
import AccommodationsList from "../data/logements.json"


const Home = () => {
  return (
    <div>
        <Banner backgroundImg={ImgHome} about={false} text="Chez vous, partout et ailleurs" />
        <main>
        <CardsContainer accommodations={AccommodationsList} />
        </main>
    </div>
  )
}

export default Home