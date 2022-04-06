import './LandingSection.scss';
import { Link } from "react-router-dom";

const LandingSection = () => {
	return (
		<div className="landing-wrapper">
			<div className="location">
				Montevideo, Uruguay
			</div>
			<div>
				<h1 style={{color: 'white', marginBottom: '45px'}}> Diseñados para <br /> una nueva era </h1>
			</div>
			<div className="buttons">
				<button className="landing-button ver"> VER APARTAMENTOS </button>
				<button className="landing-button"> DESCARGAR BROCHURE </button>
			</div>
		</div>
	)
}

export default LandingSection;
