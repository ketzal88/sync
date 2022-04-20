import './PrensaSection.scss';
import { Link } from "react-router-dom";
import { Grid } from '@mui/material';

const PrensaSection = () => {

	const articles = [1, 2, 3];

	return (
		<Grid container flexDirection="column">
			<Grid item className="prensa-title">
				<h1> Prensa </h1>
			</Grid>
			<Grid container flexDirection="row" className="card-container">
				{
					articles.map((key) => (
						<Grid container flexDirection="column" className="prensa-card">
							<img className="article-image placeholder-background"></img>
							<Grid key={key} container flexDirection="column" justifyContent="center" className="article-info">
								<Grid item className="article-title">
									01 Sync: Conoce lo nuevo
								</Grid>
								<Grid item className="article-intro">
									Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
								</Grid>
								<Grid item className="ver-mas">
									Ver más
								</Grid>
							</Grid>
						</Grid>
					))
				}
			</Grid>
		</Grid>
	)
}

export default PrensaSection;
