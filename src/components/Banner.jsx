import React from "react";

const Banner = ({ backgroundImg, text, about }) => {

	return (
		<div className={`img-container ${about ? "--about" : "--home"}`}>
			<img
				src={backgroundImg}
				alt="Chez vous, partout et ailleurs"
				className="img-container__image"
			/>
			{text ? <h1 className="img-container__text">{text}</h1> : null}
		</div>
	)
};

export default Banner;
