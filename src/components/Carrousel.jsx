import React, { useState } from "react";
import LeftArrow from "../assets/left_arrow.png";
import RightArrow from "../assets/right_arrow.png";

const Carrousel = ({ id, title, pictures }) => {
	const [currentPicture, setCurrentPicture] = useState(0);

	const goToLeft = () => {
		setCurrentPicture(
			currentPicture === 0
				? pictures.length - 1 // "pictures.length" -1 car l'index commence à 0
				: currentPicture - 1
		); 
	};

	const goToRight = () => {
		setCurrentPicture(
			currentPicture === pictures.length - 1
				? 0
				: currentPicture + 1
		);
	};

	return (
		<section className="carrousel">
			{pictures.map((picture, index) => (
				<div key={id + index}>
					{index === currentPicture && (
						<img
							src={picture}
							alt={title}
							className="carrousel__image"
						/>
					)}
				</div>
			))}

			{pictures.length > 1 && (
				<img
					src={LeftArrow}
					alt="Flèche gauche"
					className="carrousel__left-arrow"
					onClick={goToLeft}
				/>
			)}

			{pictures.length > 1 && (
				<img
					src={RightArrow}
					alt="flèche droite"
					className="carrousel__right-arrow"
					onClick={goToRight}
				/>
			)}

            <span className="carrousel__image-number">
                {currentPicture +1} / {pictures.length}
            </span>
		</section>
	);
};

export default Carrousel;
