import './Header.scss';
import { Link } from "react-router-dom";
import { Typography } from '@mui/material';

const Header = () => {
	return (
		<div className="header">
			<div className="header-wrapper">
				<nav>
					<Link to="/">
						<Typography>
							INICIO
						</Typography>
					</Link>  
				</nav>
				<nav>
					<Link to="/apartments">EL EDIFICIO</Link>  
				</nav>
				<nav>
					<Link to="/apartments">APARTMENTOS</Link>  
				</nav>
				<nav>
					<Link to="/apartments">AMENITIES</Link>  
				</nav>
				<nav>
					<Link to="/apartments">CONTACTO</Link>  
				</nav>
			</div>
		</div>
	)
}

export default Header;
