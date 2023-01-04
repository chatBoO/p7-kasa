import React from "react";
import { useParams } from "react-router-dom";
import Carrousel from "../components/Carrousel";
import Collapse from "../components/Collapse";
import Rating from "../components/Rating";
import NotFound from "./NotFound";

const Accommodation = ({ accommodations }) => {
	const { id } = useParams(); // Récupération de l'id en paramètre URL, avec {id} entre accolades sinon non reconnu
	const accommodationsList = accommodations;

	const currentAccommodation = accommodationsList.find(
		(acc) => acc.id === id
	);

	return ( currentAccommodation ?

		<main>
			<Carrousel currentAccommodation={currentAccommodation} />

			<article className="accommodation-container">
				<section className="accommodation-container__informations">
					<h1 className="accommodation-container__informations__title">
						{currentAccommodation.title}
					</h1>
					<h2 className="accommodation-container__informations__location">
						{currentAccommodation.location}
					</h2>
					<div className="accommodation-container__informations__tags">
						{currentAccommodation.tags.map((tag) => (
							<span key={tag}>{tag}</span>
						))}
					</div>
				</section>

				<section className="accommodation-container__informations2">
					<div className="accommodation-container__informations2__host">
						<h2 className="accommodation-container__informations2__host__name">
							{currentAccommodation.host.name}
						</h2>
						<img
							src={currentAccommodation.host.picture}
							alt={currentAccommodation.host.name}
							className="accommodation-container__informations2__host__picture"
						/>
					</div>
					<div className="accommodation-container__informations2__rating">
						<Rating rate={currentAccommodation.rating} />
					</div>
				</section>
			</article>

			<article className="accommodation-collapses">
				<Collapse
					title="Description"
					collapseWidth="47%"
					content={currentAccommodation.description}
				/>

				<Collapse
					title="Équipements"
					collapseWidth="47%"
					content={
						<ul className="accommodation-collapses__equipments">
							{currentAccommodation.equipments.map(
								(equipment) => (
									<li key={equipment}>{equipment}</li>
								)
							)}
						</ul>
					}
				/>
			</article>
		</main> : <NotFound />
	);
};

export default Accommodation;
