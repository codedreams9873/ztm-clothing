import { Link, Outlet } from "react-router-dom";
import { ReactComponent as CrownSvg } from "../../assets/crown.svg";
import "./navigation.styles.scss";

const Navigation = () => {
	return (
		<>
			<div className="navigation">
				<Link className="logo-container" to="/">
					<CrownSvg />
				</Link>
				<div className="nav-links-container">
					<Link className="nav-link" to="/shop">
						Shop
					</Link>
					<Link className="nav-link" to="/auth">
						Sign In
					</Link>
				</div>
			</div>
			<Outlet />
		</>
	);
};

export default Navigation;
