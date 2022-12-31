import { NavLink } from "react-router-dom";
import Logo from "../assets/logo_kasa.png";

const Header = () => {

	return (
		<header className="header">
			<img src={Logo} alt="logo" className="header__logo"/>
			<nav className="header__navigation">
				<ul className="header__navigation__liste">
					<NavLink to="/" className={(nav) => nav.isActive ? "nav-active" : null}>
						<li>Accueil</li>
					</NavLink>
                    <NavLink to="/about" className={(nav) => nav.isActive ? "nav-active" : null}>
						<li>A Propos</li>
					</NavLink>				
				</ul>
			</nav>
		</header>
	);
};

export default Header;
