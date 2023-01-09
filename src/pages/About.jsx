import React from "react";
import Collapse from "../components/Collapse";
import ImgAbout from "../assets/img-about.webp";
import Banner from "../components/Banner";

const About = ({ dataAbout }) => {
	return (
		<div>
			<Banner backgroundImg={ImgAbout} about={true} />
			<main>
				<article className="collapse-container --about">
					{dataAbout.map(({ title, description, id }) => (
						<Collapse
							title={title}
							description={description}
							key={title + id}
						/>
					))}
				</article>
			</main>
		</div>
	);
};

export default About;
