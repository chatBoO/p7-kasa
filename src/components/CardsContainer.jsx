import Card from "./Card";

const CardsContainer = ({ logements }) => {
	console.log(logements);
	const accommodationsList = logements;

	return (
		<article className="cards-container">
			{accommodationsList.map((accommodation) => (
                <Card key={accommodation.id} cover={accommodation.cover} title={accommodation.title} id={accommodation.id}/>
            ))}
		</article>
	);
};

export default CardsContainer;
