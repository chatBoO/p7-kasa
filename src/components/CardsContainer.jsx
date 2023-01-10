import Card from "./Card";
import AccommodationsList from "../data/logements.json"

const CardsContainer = () => {
	const accommodationsList = AccommodationsList; // Stockage du fichier "logements.json" dans une variable pour le manipuler plus facilement

	return (
		<article className="cards-container">
			{accommodationsList.map((accommodation) => (
                <Card key={accommodation.id} cover={accommodation.cover} title={accommodation.title} id={accommodation.id}/>
            ))}
		</article>
	);
};

export default CardsContainer;
