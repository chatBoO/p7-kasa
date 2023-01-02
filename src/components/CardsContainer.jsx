import logements from "../data/logements.json";
import Card from "./Card";

const CardsContainer = () => {

	const accommodationsList = logements;

	return (
		<div className="cards-container">
			{accommodationsList.map((accommodation) => (
                <Card key={accommodation.id} cover={accommodation.cover} title={accommodation.title} />
            ))}
		</div>
	);
};

export default CardsContainer;
