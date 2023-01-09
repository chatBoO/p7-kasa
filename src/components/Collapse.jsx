const Collapse = ({ title, description, equipments }) => {
	return (
			<details>
				<summary className="collapse-container__title">
					{title} <i className="fa-solid fa-chevron-down"></i>
				</summary>

				<div className="collapse-container__text__container">
					{description ? description : equipments}
				</div>
			</details>
	);
};

export default Collapse;
