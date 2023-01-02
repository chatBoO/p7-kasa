import listeLogements from "../data/logements.json";
import Card from "./Card";

const CardsContainer = () => {

	const accommodationsList = listeLogements;

	return (
		<div className="cards-container">
			{accommodationsList.map((accommodation) => (
                <Card key={accommodation.id} cover={accommodation.cover} title={accommodation.title} id={accommodation.id}/>
            ))}
		</div>
	);
};

export default CardsContainer;
