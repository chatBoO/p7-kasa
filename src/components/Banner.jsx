import React from "react";

const Banner = ({ backgroundImg, text, about }) => {

	return (
		// ternaire qui vérifie si la props "about" existe, si oui on ajoute la classe "--about" sinon "--home"
		<div className={`img-container ${about ? "--about" : "--home"}`}>
			<img
				src={backgroundImg}
				alt="Chez vous, partout et ailleurs"
				className="img-container__image"
			/>
			{/* ternaire qui vérifie si la props "text" existe, si oui on l'affiche sinon on ne fait rien */}
			{text ? <h1 className="img-container__text">{text}</h1> : null}
		</div>
	)
};

export default Banner;
