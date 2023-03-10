import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Carrousel from "../components/Carrousel";
import Collapse from "../components/Collapse";
import Accommodations from "../data/logements.json";
import AccInformations from "../components/AccInformations";

const Accommodation = () => {
	const { id } = useParams(); // Récupération de l'id en paramètre URL, avec {id} entre accolades sinon reconnu en tant qu'objet
	const currentAccommodation = Accommodations.find((acc) => acc.id === id); // Utilisation de la méthode .find pour chercher le logement avec son id
	const navigate = useNavigate();

	useEffect(() => {
		if (currentAccommodation === undefined) {
			navigate("/404");
		}
	}, []);

	if (currentAccommodation) {
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
				<AccInformations
					title={title}
					location={location}
					tags={tags}
					host={host}
					rating={rating}
				/>
				<article className="accommodation-collapses">
					<section className="collapse-container">
						<Collapse
							title={"Description"}
							description={description}
						/>
					</section>
					<section className="collapse-container">
						<Collapse
							title={"Équipement"}
							equipments={
								<ul>
									{equipments.map((equipment) => (
										<li key={equipment}>{equipment}</li>
									))}
								</ul>
							}
						/>
					</section>
				</article>
			</main>
		);
	}
};

export default Accommodation;
