import './EdificioSection.scss';
import { Link } from "react-router-dom";

const EdificioSection = () => {
	return (
		<div className="edificio-wrapper">
			<div className="edificio-section padding placeholder-background">
				<div className="content-column">
					<h1 className="edificio-title"> El edificio </h1>
					<div className="edificio-info">
						<h1>104</h1>
						<h3>Apartamentos</h3>
					</div>
					<div className="edificio-info">
						<h1>2</h1>
						<h3>Torres conectadas</h3>
					</div>
					<div className="edificio-info">
						<h1>60</h1>
						<h3>Cocheras en subsuelo</h3>
					</div>
					<div className="edificio-info">
						<h1>22</h1>
						<h3>Cocheras en planta baja</h3>
					</div>
				</div>
			</div>
			<div className="edificio-section">
				<div className="edificio-image placeholder-background">foto</div>
				<div className="edificio-features">
					<h2> Domótica </h2>
					<h4>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nulla malesuada pellentesque elit eget gravida cum sociis natoque penatibus. Pharetra massa massa ultricies mi quis hendrerit dolor magna.
					</h4>
				</div>
			</div>
			<div className="edificio-section padding white flex-column">
				<h1>Conocé al arquitecto <br /> del proyecto</h1>
				<div className="arq-info">
					<div className="arq-video placeholder-background">video</div>
					<div className="arq-text">
						<h2>Algo innovador</h2>
						<h4>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nulla malesuada pellentesque elit eget gravida cum sociis natoque penatibus. Pharetra massa massa ultricies mi quis hendrerit dolor magna.
						</h4>
					</div>
				</div>
			</div>
		</div>
	)
}

export default EdificioSection;
