import React from "react";
import { Link } from "react-router-dom";

const Card = ({ title, id, cover }) => {
	return (
		// La card est cliquable et envoie à la route "fiche-logement" à laquelle on ajoute l'id en paramètre pour être récupérer dans la fiche logement
        <Link to={`/fiche-logement/${id}`}>
		<section className="card-container">
            <img src={cover} alt="logement" className="card-container__image"/>
			<div className="card-container__text-container">
				<p className="card-container__text-container__text">{title}</p>
			</div>
		</section>
        </Link>
	);
};

export default Card;
