import React from "react";
import Collapse from "../components/Collapse";
import ImgAbout from "../assets/img-about.svg";
import HomeImg from "../components/HomeImg";

const About = ({ dataAbout }) => {
	return (
		<div>
			<HomeImg backgroundImgAbout={ImgAbout} />
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
