import './Header.scss';
import { Link } from "react-router-dom";

const Header = () => {
	return (
		<div className="header">
			<nav style={{color: "white"}}>
				<Link to="/apartments">Apartments</Link>  
			</nav>
		</div>
	)
}

export default Header;
