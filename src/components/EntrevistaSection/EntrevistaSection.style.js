import { makeStyles } from "@mui/styles";

export const usePrensaSectionStyles = makeStyles((theme) => ({
  wrapperSection: {
    maxWidth: "1920px",
    width: "100%",
    boxSizing: "border-box",
    position: "relative",
    [theme.breakpoints.down("lg")]: {
      minHeight: "1006px",
    },
    [theme.breakpoints.up("xl")]: {
      minHeight: "1151px",
    },
  },
  titleSection: {
    fontSize: "48px !important",
    paddingLeft: "33px",
    marginTop: "62px !important",
    [theme.breakpoints.up("md")]: {
      marginLeft: "93px !important",
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
    justifyContent: "center",
    order: "-1",
    marginTop: "75px",
    rowGap: "58px",
    [theme.breakpoints.up("md")]: {
      marginTop: "92px",
      order: "1",
      columnGap: "26px",
      // paddingRight: "91px",
      marginLeft: "-50px",
    },
    [theme.breakpoints.up("lg")]: {
      columnGap: "90px",
      rowGap: "58px",
      paddingRight: "108px",
      marginLeft: "-50px",
    },
    [theme.breakpoints.up("xl")]: {
      rowGap: "100px",
      columnGap: "185px",
      paddingRight: "118px",
      paddingLeft: "71px",
    },
  },
  formControl: {
    justifyContent: "space-around",
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
    [theme.breakpoints.down("md")]: {
      width: "325px",
      height: "50px",
    },
  },
  selectInput: {
    height: "36px !important",
    marginTop: "44px !important",
    "& .MuiSelect-select": {
      height: "32px !important",
      borderRadius: "0 !important",
      borderBottom: `4px solid ${theme.palette.primary.syncOrange}`,
      padding: "0 !important",
      "&:before": {
        borderBottom: `4px solid ${theme.palette.primary.syncOrange}`,
      },
      "&:after, &:hover, &:active, &:focus": {
        borderBottom: `4px solid ${theme.palette.primary.syncOrange}`,
      },
    },
    "& .MuiOutlinedInput-notchedOutline": {
      border: "0 !important",
      padding: "4px 0 5px !important",
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
    "&:after, &:active, &:focus": {
      fontSize: "30px !important",
      color: "#707070 !important",
    },
    [theme.breakpoints.down("md")]: {
      fontSize: "24px !important",
    },
  },
  inputForm: {
    "&.MuiInput-root": {
      "&:hover": {
        borderBottom: `4px solid ${theme.palette.primary.syncOrange} !important`,
        "&:not(.Mui-disabled):before": {
          borderBottom: "none",
        },
      },
      "&:before, &:after": {
        borderBottom: "none",
        "&:hover, &:active, &:focus": {
          borderBottom: "none",
        },
      },
      "&:hover, &:active, &:focus": {
        borderBottom: "none",
        "&:before, &:after": {
          borderBottom: "none",
        },
      },
    },
  },
  underlineInput: {
    borderBottom: `4px solid ${theme.palette.primary.syncOrange}`,
    marginTop: "44px !important",
  },
  sellerImgContainer: {
    position: "relative",
    marginBottom: "-1px",
    marginTop: "82px",
    [theme.breakpoints.up("sm")]: {
      marginTop: "200px",
    },
    [theme.breakpoints.up("md")]: {
      marginTop: "388px",
      height: "506px",
    },
    [theme.breakpoints.up("lg")]: {
      marginTop: "72px",
      height: "821px",
    },
  },
  sellerInfoContainer: {
    width: "100%",
    height: "100px",
    [theme.breakpoints.up("sm")]: {
      backgroundColor: theme.palette.primary.syncBlue,
      borderTopRightRadius: "145px",
      borderBottomRightRadius: "145px",
      position: "absolute",
      bottom: 0,
      paddingInline: "53px",
      height: "144px",
      paddingBlock: "35px",
      width: "95%",
    },
    [theme.breakpoints.up("md")]: {
      width: "600px",
    },
    [theme.breakpoints.up("lg")]: {
      width: "850px",
      paddingLeft: "93px",
    },
    [theme.breakpoints.down("md")]: {
      height: "unset",
    },
  },
  sellerName: {
    color: theme.palette.primary.syncOrange,
    fontWeight: "bold !important",
    marginBottom: "11px !important",
    fontSize: "25px !important",
    [theme.breakpoints.up("lg")]: {
      fontSize: "30px !important",
    },
  },
  sellerPhone: {
    color: "#132127",
    fontSize: "25px !important",
    margin: "0 !important",
    [theme.breakpoints.up("sm")]: {
      color: "white",
    },
    [theme.breakpoints.up("lg")]: {
      fontSize: "30px !important",
      lineHeight: "-1.3 !important",
    },
  },
  whatsAppIcon: {
    verticalAlign: "middle",
    marginRight: "5px",
    fontSize: "24px !important",
    [theme.breakpoints.up("sm")]: {
      color: "white",
    },
    [theme.breakpoints.up("lg")]: {
      fontSize: "39px !important",
    },
  },
  agendarEntrevistaButton: {
    display: "flex",
    borderRadius: "46px",
    backgroundColor: theme.palette.primary.syncOrange,
    border: "none",
    outline: "none",
    margin: "55px 0px",
    "& > p": {
      color: theme.palette.primary.syncBlue,
      textTransform: "uppercase !important",
      fontWeight: "bold !important",
      fontSize: "14px !important",
      padding: "25px 17px !important",
      [theme.breakpoints.up("lg")]: {
        fontSize: "18px !important",
        padding: "33px 27px !important",
      },
    },
    [theme.breakpoints.up("sm")]: {
      margin: 0,
    },
    [theme.breakpoints.down("sm")]: {
      height: "64px",
      "& > p": {
        padding: "20px 17px !important",
        display: "flex",
      },
    },
  },
  imgSellerBox: {
    width: "235px",
    height: "235px",
    marginInline: "auto",
    borderRadius: "50%",
    marginBottom: "62px !important",
    overflow: "hidden",
    display: "flex",
    justifyContent: "center",
    [theme.breakpoints.up("sm")]: {
      display: "inline-block",
      // width: "231px",
      overflow: "unset",
      maxHeight: "100%",
      borderRadius: 0,
      marginLeft: 0,
      marginTop: "0px",
    },
    [theme.breakpoints.up("md")]: {
      marginTop: "80px",
    },
    [theme.breakpoints.up("lg")]: {
      height: "676px",
      width: "457px",
      marginTop: "0px",
    },
    [theme.breakpoints.up("xl")]: {
      height: "550px",
      width: "457px",
    },
  },
  imgSeller: {
    objectFit: "contain",
    height: "100%",
    width: "100%",
    [theme.breakpoints.up("xs")]: {
      transform: "translateY(20%) translateX(-5%) scale(1.4)",
    },
    [theme.breakpoints.up("sm")]: {
      marginBottom: "230px",
      transform: "translateY(0%) translateX(-6%) scale(1.4)",
      display: "inline-block",
      maxHeight: "100%",
      borderRadius: 0,
      marginLeft: 0,
    },
    [theme.breakpoints.up("lg")]: {
      marginTop: "73px",
      transform: "translateX(-16%) translateY(5%)",
    },
    [theme.breakpoints.up("xl")]: {
      transform: "translateX(-13%) translateY(10%)",
    },
    // [theme.breakpoints.down("md")]: {
    //   height: " 370px !important",
    //   transform: "translateX(-7%) translateY(-20%)",
    // },
  },
  radioButton: {
    "& svg": {
      width: "48px",
      height: "48px",
      color: theme.palette.primary.syncOrange,
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
    color: theme.palette.primary.syncOrange,
    position: "relative",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: "46px",
    fontWeight: "bold",
    padding: "33px 50px 33px 50px !important",
    width: "100%",
    fontSize: "17px",
    textAlign: "left",
    [theme.breakpoints.up("sm")]: {
      maxWidth: "336px",
    },
    [theme.breakpoints.up("lg")]: {
      fontSize: "19px",
      marginTop: "86px",
      maxWidth: "372px",
    },
    [theme.breakpoints.up("xl")]: {
      fontSize: "22px",
      marginTop: "62px",
    },
    [theme.breakpoints.down("sm")]: {
      height: "64px",
      padding: "14px",
    },
  },
  carrotButton: {
    color: "white",
    position: "absolute",
    right: "20px",
  },
}));
