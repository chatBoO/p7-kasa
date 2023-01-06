import React from "react";
import Collapse from "../components/Collapse";
import ImgAbout from "../assets/img-about.png";
import HomeImg from "../components/HomeImg";

const About = ({ dataAbout }) => {
	return (
		<div>
			<HomeImg backgroundImg={ImgAbout} />
			<main>
				<article className="collapse-container --about">
					{dataAbout.map(({ title, description, id }) => (
						<Collapse
							title={title}
							collapseWidth={"80%"}
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
