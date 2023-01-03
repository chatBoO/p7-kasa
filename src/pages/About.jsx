import React from "react";
import Collapse from "../components/Collapse";
import ImgAbout from "../assets/img-about.png";
import HomeImg from "../components/HomeImg";

const About = () => {
	return (
		<div>
			<HomeImg backgroundImg={ImgAbout} />
			<main>
				<artcile className="collapses-container">
					<Collapse
						title="Fiabilité"
						collapseWidth={"80%"}
						content="Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes."
					/>
					<Collapse
						title="Respect"
						collapseWidth={"80%"}
						content="La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."
					/>
					<Collapse
						title="Service"
						collapseWidth={"80%"}
						content="Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question."
					/>
					<Collapse
						title="Sécurité"
						collapseWidth={"80%"}
						content="La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes."
					/>
				</artcile>
			</main>
		</div>
	);
};

export default About;
