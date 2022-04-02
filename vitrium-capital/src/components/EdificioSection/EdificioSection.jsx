import './EdificioSection.scss';
import { Link } from "react-router-dom";

const EdificioSection = () => {
	return (
		<div className="building-wrapper">
			<div className="content-column">
				<h1 className="building-title"> El edificio </h1>
				<div className="building-info">
					<h1>104</h1>
					<h3>Apartamentos</h3>
				</div>
				<div className="building-info">
					<h1>2</h1>
					<h3>Torres conectadas</h3>
				</div>
				<div className="building-info">
					<h1>60</h1>
					<h3>Cocheras en subsuelo</h3>
				</div>
				<div className="building-info">
					<h1>22</h1>
					<h3>Cocheras en planta baja</h3>
				</div>
			</div>
		</div>
	)
}

export default EdificioSection;
