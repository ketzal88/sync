import { makeStyles } from "@mui/styles";

export const useFooterStyles = makeStyles((theme) => ({
  footerContainer: {
    color: "white",
    backgroundColor: theme.palette.primary.syncBlue,
    padding: "111px 100px 80px 100px",
  },
  subTitle: {
    fontSize: "30px !important",
    fontWeight: "bold !important",
  },
  text: {
    fontSize: "20px !important",
  },
}));
