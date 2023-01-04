import React from "react";
import LogoFooter from "../assets/logo_kasa_footer.png";

const Footer = () => {
	return (
		<footer>
			<div className="footer__logo">
				<img src={LogoFooter} alt="Logo footer"></img>
			</div>
			<p className="footer__text">© 2022 Kasa. All rights reserved</p>
		</footer>
	);
};

export default Footer;
