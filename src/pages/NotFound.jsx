import React from "react";
import { Link } from "react-router-dom";



const NotFound = () => {
	return (
		<div className="error404">
			<main className="error404__container">
				<h1 className="error404__container__title">404</h1>
				<p className="error404__container__text">
					Oups! La page que vous demandez n'existe pas.
				</p>
				<Link to="/">
					<p className="error404__container__back">Retourner sur la page d'accueil</p>
				</Link>
			</main>
		</div>
	);
};

export default NotFound;
