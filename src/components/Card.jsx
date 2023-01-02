import React from "react";
import { NavLink } from "react-router-dom";

const Card = ({ title }) => {
	return (
        <NavLink to="/fiche-logement/:id">
		<div className="card-container">
			<div className="card-container__text-container">
				<p className="card-container__text-container__text">{title}</p>
			</div>
		</div>
        </NavLink>
	);
};

export default Card;
