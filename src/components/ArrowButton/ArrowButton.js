import useStyles from "./ArrowButton.styles";
import flecha from "../../assets/images/flecha.svg";

const ArrowButton = () => {
  const classes = useStyles();
  return <img src={flecha} alt="Flecha" className={classes.arrowButton} />;
};

export default ArrowButton;
