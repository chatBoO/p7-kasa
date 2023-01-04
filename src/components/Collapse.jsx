import React, { useState } from "react";
import upArrow from "../assets/up_arrow.png";
import downArrow from "../assets/down_arrow.png";

const Collapse = ({ title, content, collapseWidth }) => {

	const [isOpen, setIsOpen] = useState(false);
	const toggle = () => setIsOpen(!isOpen);

	return (
		<div className="collapse-container" style={{width: collapseWidth}} onClick={toggle}>
			<div className="collapse-container__title">
					<p>{title}</p>

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
            <div className='collapse-container__text__container'>
                {content}
            </div>}
		</div>
	);
};

export default Collapse;
