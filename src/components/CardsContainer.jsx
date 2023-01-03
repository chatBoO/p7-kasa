import Card from "./Card";

const CardsContainer = ({ accommodations }) => {
	const accommodationsList = accommodations;

	return (
		<article className="cards-container">
			{accommodationsList.map((accommodation) => (
                <Card key={accommodation.id} cover={accommodation.cover} title={accommodation.title} id={accommodation.id}/>
            ))}
		</article>
	);
};

export default CardsContainer;
