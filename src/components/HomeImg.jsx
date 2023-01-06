import React from "react";

const HomeImg = ({ backgroundImg, text, long }) => {

	return (
		<div className={`img-container ${long ? "--about" : "--home"}`}>
			<img
				src={backgroundImg}
				alt="Chez vous, partout et ailleurs"
				className="img-container__image"
			/>
			{text ? <h1 className="img-container__text">{text}</h1> : null}
		</div>
	)
};

export default HomeImg;
