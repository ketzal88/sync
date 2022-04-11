import { Link } from "react-router-dom";
import useStyles from "./ArrowButton.styles";
import { Grid } from "@mui/material";

const ArrowButton = () => {
	const classes = useStyles();
	return (
		<Grid className={classes["arrow-button"]}>
    </Grid>
	)
}

export default ArrowButton;
