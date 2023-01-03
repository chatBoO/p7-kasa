import React from "react";
import { useParams } from "react-router-dom";
import Carrousel from "../components/Carrousel";
import Header from "../components/Header";

const Accommodation = ({logements}) => {

	const {id} = useParams(); // Récupération de l'id en paramètre URL, avec {id} entre accolades sinon non reconnu
    const accommodationsList = logements;
    const currentAccommodation = accommodationsList.find((pict) => pict.id === id)

	return (

		<div>
			<Header />
            <Carrousel currentAccommodation={currentAccommodation}/>
		</div>
	);
};

export default Accommodation;
