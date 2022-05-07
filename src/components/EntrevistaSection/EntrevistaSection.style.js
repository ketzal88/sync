import { makeStyles } from "@mui/styles";

export const usePrensaSectionStyles = makeStyles((theme) => ({
  wrapperSection: {
    paddingTop: "100px",
  },
  titleSection: {
    marginLeft: "100px !important",
    fontSize: "60px !important",
    marginBottom: "80px !important",
  },
  formControl: { width: "550px", height: "176px" },
  input: {
    "&:after": {
      marginTop: "44px !important",
    },
  },
  inputLabel: {
    marginLeft: "-15px !important",
    fontSize: "30px !important",
    color: "#707070 !important",
    "&:active": {
      fontSize: "30px !important",
      color: "#707070 !important",
    },
    "&:after": {
      fontSize: "30px !important",
      color: "#707070 !important",
    },
    "&:focus": {
      fontSize: "30px !important",
      color: "#707070 !important",
    },
  },
  underlineInput: {
    borderBottom: "4px solid #E3855A",
    marginTop: "44px !important",
    "&:after": {
      borderBottom: "0 !important",
    },
    "&:active": {
      borderBottom: "0 !important",
    },
    "&:focus": {
      borderBottom: "0 !important",
    },
  },
  sellerContainer: {
    paddingTop: "35px",
    width: "388px",
    backgroundColor: "#132127",
    borderTopRightRadius: "145px",
    position: "absolute",
    bottom: "0",
    paddingLeft: "93px",
  },
  sellerName: {
    fontSize: "30px !important",
    fontWeight: "bold !important",
    color: "#F1804F",
    marginBottom: "0px !important",
  },
  sellerPhone: {
    fontSize: "30px !important",
    color: "white",
    marginBottom: "35px !important",
    lineHeight: "-1.3 !important",
  },
  imgSeller: {
    height: "676px",
    width: "457px",
    objectFit: "contain",
    transform: "translateX(-15%) translateY(8%) scale(1.2)",
  },
  radioButton: {
    "& svg": {
      width: "48px",
      height: "48px",
      color: "#F1804F",
      borderRadius: "50%",
      "&:active": {
        borderRadius: "50%",
      },
    },
  },
  labelRadioButton: {
    typography: {
      fontSize: "20px !important",
      color: "#132127",
    },
  },
  buttonSubmit: {
    backgroundColor: theme.palette.primary.syncBlue,
    color: "#F1804F",
    padding: "29px 0px 29px 134px",
    borderRadius: "46px",
    fontSize: "22px",
    fontWeight: "bold",
  },
}));
