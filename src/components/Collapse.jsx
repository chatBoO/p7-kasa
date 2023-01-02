import React, { useState } from "react";
import upArrow from "../assets/up_arrow.png";
import downArrow from "../assets/down_arrow.png";

const Collapse = () => {
	const [isOpen, setIsOpen] = useState(false);
	const toggle = () => setIsOpen(!isOpen);

	return (
		<div className="collapse-container" onClick={toggle}>
			<div className="collapse-container__title">
					<p>Test</p>

				{isOpen ? (
					<img
						className="collapse-container__upArrow"
						src={upArrow}
						alt="fleche haut"
					/>
				) : (
					<img
						className="collapse-container__downArrow"
						src={downArrow}
						alt="fleche bas"
					/>
				)}
			</div>
            {isOpen && 
            <div className='collapse-container__text'>
                <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet excepturi necessitatibus, deleniti recusandae est maiores molestias natus expedita error quia obcaecati tempore illo provident explicabo sunt maxime nisi sed inventore?</div>
            </div>}
		</div>
	);
};

export default Collapse;
