import { makeStyles } from "@mui/styles";

export const usePrensaSectionStyles = makeStyles((theme) => ({
  wrapperSection: {
    paddingTop: "100px",
    maxWidth: "1920px",
    width: "100%",
  },
  titleSection: {
    [theme.breakpoints.up("lg")]: {
      marginLeft: "93px !important",
      fontSize: "48px !important",
      marginBottom: "72px !important",
    },
    [theme.breakpoints.up("xl")]: {
      marginLeft: "100px !important",
      fontSize: "60px !important",
      marginBottom: "80px !important",
    },
  },
  formContainer: {
    display: "flex",
    flexWrap: "wrap",
    alignContent: "flex-start",
    [theme.breakpoints.up("lg")]: {
      columnGap: "112px",
      rowGap: "58px",
      paddingRight: "108px",
      marginLeft: "-50px",
    },
    [theme.breakpoints.up("xl")]: {
      rowGap: "100px",
      paddingRight: "118px",
      paddingLeft: "71px",
    },
  },
  formControl: {
    [theme.breakpoints.up("lg")]: {
      width: "368px",
      height: "79px",
    },
    [theme.breakpoints.up("xl")]: {
      width: "534px",
    },
  },
  codAreaForm: {
    [theme.breakpoints.up("lg")]: {
      visibility: "hidden",
      width: "0px",
    },
    [theme.breakpoints.up("xl")]: {
      visibility: "visible",
      marginRight: "45px !important",
      width: "175px",
    },
  },
  phoneNumberInput: {
    [theme.breakpoints.up("lg")]: { width: "368px" },
    [theme.breakpoints.up("xl")]: { width: "323px" },
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
      borderBottom: "4px solid #E3855A !important",
    },
    "&:hover": {
      borderBottom: "4px solid #E3855A !important",
    },
    "&:active": {
      borderBottom: "4px solid #E3855A !important",
    },
    "&:focus": {
      borderBottom: "4px solid #E3855A !important",
    },
  },
  sellerImgContainer: {
    height: "821px",
    position: "relative",
  },
  sellerContainer: {
    backgroundColor: "#132127",
    [theme.breakpoints.up("lg")]: {
      paddingTop: "35px",
      width: "388px",
      borderTopRightRadius: "145px",
      position: "absolute",
      bottom: "0",
      paddingLeft: "93px",
    },
    [theme.breakpoints.up("xl")]: {
      paddingTop: "35px",
      width: "388px",
      borderTopRightRadius: "145px",
      position: "absolute",
      bottom: "0",
      paddingLeft: "93px",
    },
  },
  sellerName: {
    [theme.breakpoints.up("lg")]: {
      fontSize: "30px !important",
      fontWeight: "bold !important",
      color: "#F1804F",
      marginBottom: "0px !important",
    },
  },
  sellerPhone: {
    [theme.breakpoints.up("lg")]: {
      fontSize: "30px !important",
      color: "white",
      marginBottom: "35px !important",
      lineHeight: "-1.3 !important",
    },
  },
  imgSeller: {
    [theme.breakpoints.up("lg")]: {
      height: "676px",
      width: "457px",
      objectFit: "contain",
      transform: "translateX(-13%) translateY(5%) scale(1.2)",
    },
    [theme.breakpoints.up("xl")]: {
      height: "676px",
      width: "457px",
      objectFit: "contain",
      transform: "translateX(-15%) translateY(8%) scale(1.2)",
    },
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
  buttonContainer: {
    display: "flex",
    width: "100%",
  },
  buttonSubmit: {
    backgroundColor: theme.palette.primary.syncBlue,
    color: "#F1804F",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexWrap: "nowrap",
    borderRadius: "46px",
    fontWeight: "bold",
    [theme.breakpoints.up("lg")]: {
      padding: "29px 0px 29px 134px",
      fontSize: "17px",
      width: "372px",
      // marginTop: "87px",
    },
    [theme.breakpoints.up("xl")]: {
      padding: "29px 0px 29px 134px",
      fontSize: "22px",
    },
  },
  carrotButton: {
    color: "white",
    [theme.breakpoints.up("lg")]: {
      marginLeft: "97px",
      paddingRight: "37px",
    },
    [theme.breakpoints.up("xl")]: {
      marginLeft: "88px",
      paddingRight: "42px",
    },
  },
}));
