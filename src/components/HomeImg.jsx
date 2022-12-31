import React from 'react'

const HomeImg = ({ backgroundImg }) => {
    console.log(backgroundImg)
  return (
    <div className="img-container">
        <img src={backgroundImg} alt="bienvenue chez nous, chez vous" className='img-container__image'/>
    </div>
  )
}

export default HomeImg