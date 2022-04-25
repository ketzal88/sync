import './PrensaSection.scss';
import { Link } from "react-router-dom";
import { Grid, Typography } from '@mui/material';

const PrensaSection = () => {

	const articles = [1, 2, 3];

	return (
		<Grid container flexDirection="column">
			<Grid item className="prensa-title">
				<Typography variant="h1"> Prensa </Typography>
			</Grid>
			<Grid container flexDirection="row" className="card-container">
				{
					articles.map((key) => (
						<Grid container flexDirection="column" className="prensa-card">
							<img className="article-image placeholder-background"></img>
							<Grid key={key} container flexDirection="column" justifyContent="center" className="article-info">
								<Grid item className="article-title">
									<Typography fontWeight={700} variant="h3">
										01 Sync: Conoce lo nuevo
									</Typography>
								</Grid>
								<Grid item className="article-intro">
									<Typography variant="h4">
										Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
									</Typography>
								</Grid>
								<Grid item className="ver-mas">
									<Typography variant="h4" fontWeight={700}>
										Ver más
									</Typography>
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
