import React from "react";
import FullStar from "../assets/star-full.png";
import EmptyStar from "../assets/star-empty.png";

const Rating = ({ rate }) => {
	const maxStars = [1, 2, 3, 4, 5]; // Nombre maximum d'étoiles

	// A chaque itération sur le tableau "MaxStars" tant que la note est supérieure ou égale au chiffre du tableau on affiche une étoile pleine, puis pour les autres itérations une étoile vide
	return maxStars.map((maxStar, key) =>
		rate >= maxStar ? (
			<img
				src={FullStar}
				alt="Etoile pleine"
				className="fullStar"
				key={key}
			/>
		) : (
			<img
				src={EmptyStar}
				alt="Etoile vide"
				className="emptyStar"
				key={key}
			/>
		)
	);
};

export default Rating;
