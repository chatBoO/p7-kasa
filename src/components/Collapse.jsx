const Collapse = ({ title, description, equipments }) => {
	return (
			// Utilisation des balises HTML Natives <details> et <summary> pour créer une collapse
			<details>
				<summary className="collapse-container__title">
					{title} <i className="fa-solid fa-chevron-down"></i>
				</summary>

				<div className="collapse-container__text__container">
					{description ? description : equipments} {/* ternaire qui affiche la props "description" si elle existe sinon elle affiche "equipments" */}
				</div>
			</details>
	);
};

export default Collapse;
