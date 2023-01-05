import React from "react";
import LogoFooter from "../assets/logo_kasa_footer.png";

const Footer = () => {

	const currentYear = new Date().getFullYear();

	return (
		<footer>
			<div className="footer__logo">
				<img src={LogoFooter} alt="Logo footer"></img>
			</div>
			<p className="footer__text">© {currentYear} Kasa. All rights reserved</p>
		</footer>
	);
};

export default Footer;
