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
					<Link to="/apartments">
						<Typography>
							EL EDIFICIO
						</Typography>
					</Link>  
				</nav>
				<nav>
					<Link to="/apartments">
						<Typography>
							APARTMENTOS
						</Typography>
					</Link>  
				</nav>
				<nav>
					<Link to="/apartments">
						<Typography>
							AMENITIES
						</Typography>
					</Link>  
				</nav>
				<nav>
					<Link to="/apartments">
						<Typography>
							CONTACTO
						</Typography>
					</Link>  
				</nav>
			</div>
		</div>
	)
}

export default Header;
