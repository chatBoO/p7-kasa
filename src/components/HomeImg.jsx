import React from "react";

const HomeImg = ({ backgroundImgHome, backgroundImgAbout, text }) => {

	return backgroundImgHome ? (

		<div className="img-container --home">
			<img
				src={backgroundImgHome}
				alt="Chez vous, partout et ailleurs"
				className="img-container__image"
			/>
			<h1 className="img-container__text">{text}</h1>
		</div>

	) : (

		<div className="img-container --about">
			<img
				src={backgroundImgAbout}
				alt="Fond de bienvenue"
				className="img-container__image --about"
			/>
		</div>

	);
};

export default HomeImg;
