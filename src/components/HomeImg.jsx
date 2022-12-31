import React from 'react'

const HomeImg = ({ backgroundImg }) => {

  return (
    <div className="img-container">
        <img src={backgroundImg} alt="Chez vous, partout et ailleurs" className='img-container__image'/>
        <h1 className="img-container__text">Chez vous, partout et ailleurs</h1>
    </div>
  )
}

export default HomeImg