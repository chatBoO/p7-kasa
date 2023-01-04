const Collapse = ({ title, description, equipments, collapseWidth }) => {
	return (
		<section
			className="collapse-container"
			style={{ width: collapseWidth }}
		>
			<details>
				<summary className="collapse-container__title">
					{title} <i className="fa-solid fa-chevron-down"></i>
				</summary>

				<div className="collapse-container__text__container">
					{description ? description : equipments}
				</div>
			</details>
		</section>
	);
};

export default Collapse;
