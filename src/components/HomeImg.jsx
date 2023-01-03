import React from 'react'

const HomeImg = ({ backgroundImg, text }) => {

  return (
    <div className="img-container">
        <img src={backgroundImg} alt="Chez vous, partout et ailleurs" className='img-container__image'/>
        <h1 className="img-container__text">{text}</h1>
    </div>
  )
}

export default HomeImg