import React from "react";
import { Link } from "react-router-dom";

const Card = ({ title, id, cover }) => {
	return (
        <Link to={`/fiche-logement/${id}`}>
		<div className="card-container">
            <img src={cover} alt="logement" className="card-container__image"/>
			<div className="card-container__text-container">
				<p className="card-container__text-container__text">{title}</p>
			</div>
		</div>
        </Link>
	);
};

export default Card;
