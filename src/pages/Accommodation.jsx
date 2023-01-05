import React from "react";
import { useParams } from "react-router-dom";
import Carrousel from "../components/Carrousel";
import Collapse from "../components/Collapse";
import NotFound from "./NotFound";
import Accommodations from "../data/logements.json";
import Rating from "../components/Rating";
// import AccInformations from "../components/AccInformations";

const Accommodation = () => {
	const { id } = useParams(); // Récupération de l'id en paramètre URL, avec {id} entre accolades sinon non reconnu

	const currentAccommodation = Accommodations.find((acc) => acc.id === id);

	if (currentAccommodation !== undefined) {
		const {
			title,
			location,
			tags,
			host,
			rating,
			pictures,
			description,
			equipments,
		} = currentAccommodation;

		return (
			<main>
				<Carrousel id={id} pictures={pictures} title={title} />
				{/* <AccInformations location={location} tags={tags} host={host} rating={rating} /> */}
				<article className="accommodation-container">
					<section className="accommodation-container__informations">
						<h1 className="accommodation-container__informations__title">
							{title}
						</h1>
						<h2 className="accommodation-container__informations__location">
							{location}
						</h2>
						<div className="accommodation-container__informations__tags">
							{tags.map((tag) => (
								<span key={tag}>{tag}</span>
							))}
						</div>
					</section>

					<section className="accommodation-container__informations2">
						<div className="accommodation-container__informations2__host">
							<h2 className="accommodation-container__informations2__host__name">
								{host.name}
							</h2>
							<img
								src={host.picture}
								alt={host.name}
								className="accommodation-container__informations2__host__picture"
							/>
						</div>
						<div className="accommodation-container__informations2__rating">
							<Rating rate={rating} />
						</div>
					</section>
				</article>
				<article className="accommodation-collapses">
					<Collapse
						title={"Description"}
						description={description}
						collapseWidth={"47%"}
					/>
					<Collapse
						title={"Équipement"}
						equipments={
							<ul>
								{equipments.map((equipment) => (
									<li key={equipment}>{equipment}</li>
								))}
							</ul>
						}
						collapseWidth={"47%"}
					/>
				</article>
			</main>
		);

	} else {
		
		return <NotFound />
	}
};

export default Accommodation;
