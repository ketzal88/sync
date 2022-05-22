import { makeStyles } from "@mui/styles";

export const usePrensaSectionStyles = makeStyles((theme) => ({
  wrapperSection: {
    maxWidth: "1920px",
    width: "100%",
    [theme.breakpoints.down("lg")]: {
      paddingTop: "67px",
      height: "calc(1006px - 67px)",
    },
    [theme.breakpoints.up("lg")]: {
      paddingTop: "123px",
      height: "calc(1006px - 123px)",
    },
    [theme.breakpoints.up("xl")]: {
      paddingTop: "100px",
      height: "calc(1359px - 100px)",
    },
  },
  titleSection: {
    [theme.breakpoints.up("md")]: {
      marginLeft: "93px !important",
      fontSize: "48px !important",
      marginBottom: "72px !important",
    },
    [theme.breakpoints.up("lg")]: {
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
    [theme.breakpoints.up("md")]: {
      columnGap: "26px",
      rowGap: "58px",
      paddingRight: "91px",
      marginLeft: "-50px",
    },
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
    [theme.breakpoints.down("lg")]: {
      width: "336px",
      height: "79px",
    },
    [theme.breakpoints.up("lg")]: {
      width: "368px",
    },
    [theme.breakpoints.up("xl")]: {
      width: "534px",
    },
  },
  codAreaForm: {
    [theme.breakpoints.down("lg")]: {
      width: "118px",
    },
    [theme.breakpoints.up("lg")]: {
      width: "100px",
    },
    [theme.breakpoints.up("xl")]: {
      visibility: "visible",
      marginRight: "45px !important",
      width: "175px",
    },
  },
  phoneNumberInput: {
    [theme.breakpoints.down("lg")]: { width: "192px" },
    [theme.breakpoints.up("lg")]: { width: "228px" },
    [theme.breakpoints.up("xl")]: { width: "280px" },
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
    position: "relative",
    [theme.breakpoints.down("lg")]: {
      marginTop: "300px",
      height: "506px",
    },
    [theme.breakpoints.up("lg")]: {
      marginTop: 0,
      height: "821px",
    },
  },
  sellerContainer: {
    backgroundColor: "#132127",
    [theme.breakpoints.up("md")]: {
      paddingTop: "35px",
      width: "388px",
      borderTopRightRadius: "145px",
      position: "absolute",
      bottom: "0",
      paddingLeft: "93px",
    },
  },
  sellerName: {
    color: "#F1804F",
    fontWeight: "bold !important",
    marginBottom: "0px !important",
    [theme.breakpoints.down("lg")]: {
      fontSize: "18px !important",
    },
    [theme.breakpoints.up("lg")]: {
      fontSize: "30px !important",
    },
  },
  sellerPhone: {
    color: "white",
    [theme.breakpoints.down("lg")]: {
      fontSize: "18px !important",
      marginBottom: "26px !important",
      lineHeight: "-1.3 !important",
    },
    [theme.breakpoints.up("lg")]: {
      fontSize: "30px !important",
      marginBottom: "35px !important",
      lineHeight: "-1.3 !important",
    },
  },
  whatsAppIcon: {
    verticalAlign: "middle",
    [theme.breakpoints.down("lg")]: {
      marginTop: "-8px",
      width: "9px",
      height: "9px",
    },
    [theme.breakpoints.up("lg")]: {
      marginTop: "-8px",
      width: "39px",
      height: "39px",
    },
  },
  imgSeller: {
    objectFit: "contain",
    [theme.breakpoints.down("lg")]: {
      height: "506px",
      width: "271px",
      transform: "translateX(-13%) translateY(-4.5%) scale(1.2)",
    },
    [theme.breakpoints.up("lg")]: {
      height: "676px",
      width: "457px",
      transform: "translateX(-13%) translateY(5%) scale(1.2)",
    },
    [theme.breakpoints.up("xl")]: {
      height: "676px",
      width: "457px",
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
    [theme.breakpoints.up("md")]: {
      padding: "29px 0px 29px 134px",
      fontSize: "17px",
      marginTop: "86px",
    },
    [theme.breakpoints.up("xl")]: {
      fontSize: "22px",
      marginTop: "62px",
    },
  },
  carrotButton: {
    color: "white",
    [theme.breakpoints.up("md")]: {
      marginLeft: "97px",
      paddingRight: "37px",
    },
    [theme.breakpoints.up("xl")]: {
      marginLeft: "88px",
      paddingRight: "42px",
    },
  },
}));
