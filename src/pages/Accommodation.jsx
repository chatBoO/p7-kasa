import React from "react";
import { useParams } from "react-router-dom";
import Carrousel from "../components/Carrousel";
import Collapse from "../components/Collapse";
import NotFound from "./NotFound";
import Accommodations from "../data/logements.json";
import AccInformations from "../components/AccInformations";

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
							collapseWidth={"47%"}
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
							collapseWidth={"47%"}
						/>
					</section>
				</article>
			</main>
		);
	} else {
		return <NotFound />;
	}
};

export default Accommodation;
