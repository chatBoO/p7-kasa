import React, { useState } from "react";
import LeftArrow from "../assets/left_arrow.png";
import RightArrow from "../assets/right_arrow.png";

const Carrousel = ({ currentAccommodation }) => {
	const [currentPicture, setCurrentPicture] = useState(0);

	const goToLeft = () => {
		setCurrentPicture(
			currentPicture === 0
				? currentAccommodation.pictures.length - 1 // "currentAccommodation.pictures.length" -1 car l'index commence à 0
				: currentPicture - 1
		); 
	};

	const goToRight = () => {
		setCurrentPicture(
			currentPicture === currentAccommodation.pictures.length - 1
				? 0
				: currentPicture + 1
		);
	};

	return (
		<section className="carrousel">
			{currentAccommodation.pictures.map((picture, index) => (
				<div key={currentAccommodation.id + index}>
					{index === currentPicture && (
						<img
							src={picture}
							alt={currentAccommodation.title}
							className="carrousel__image"
						/>
					)}
				</div>
			))}

			{currentAccommodation.pictures.length > 1 && (
				<img
					src={LeftArrow}
					alt="Flèche gauche"
					className="carrousel__left-arrow"
					onClick={goToLeft}
				/>
			)}

			{currentAccommodation.pictures.length > 1 && (
				<img
					src={RightArrow}
					alt="flèche droite"
					className="carrousel__right-arrow"
					onClick={goToRight}
				/>
			)}

            <span className="carrousel__image-number">
                {currentPicture +1} / {currentAccommodation.pictures.length}
            </span>
		</section>
	);
};

export default Carrousel;
