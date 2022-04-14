import './ApartamentosSection.scss';
import { Link } from "react-router-dom";

const ApartamentosSection = () => {
	return (
		<div className="apartamentos-wrapper">
			<h1 className="apartamentos-title"> Apartamentos </h1>
			
			{/*<div className="apartamentos-features-container">
				<div className="apartamentos-feature imagen-1">
					<div className="feature-title"> Comfort </div>
					<div className="feature-description"> 
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
					</div>
				</div>
				<div className="apartamentos-feature imagen-2">
					<div className="feature-title"> Calidad Arquitectónica </div>
					<div className="feature-description">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
					</div>
				</div>
				<div className="apartamentos-feature imagen-3">
					<div className="feature-title"> Ubicación Estratégica </div>
					<div className="feature-description">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
					</div>
				</div>
			</div>*/}
			<div className="monoambiente-info">
				<div className="scrolling-animation placeholder-background">
					animacion scrolleable
				</div>
				<h1>Monoambiente</h1>
				<h3>Sup total 47 m | Propio 34 m <br /> Terraza 2,60 m | CDM 10,40 m </h3>
				<button className="ver-tipologia-btn standard-button">VER TIPOLOGÍA</button>
			</div>
		</div>
	)
}

export default ApartamentosSection;
