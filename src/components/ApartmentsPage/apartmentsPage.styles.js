import { makeStyles } from "@mui/styles";

export const useApartmentsPageStyles = makeStyles((theme) => {
  return {
    apartmentsContainer: {
      width: "100%",
    },
    apartamentosTitle: {
      marginTop: "72px !important",
      color: theme.palette.primary.syncBlue,
      [theme.breakpoints.up("md")]: {
        fontSize: "65px !important",
      },
    },
    filtersContainer: {
      justifyContent: "flex-start",
      marginBottom: "80px !important",
      marginTop: "20px !important",
    },
    titleContainer: {
      marginBottom: "46px",
      width: "100%",
    },
    wrapper: {
      alignItems: "center",
      padding: "0 100px",
      display: "flex",
      justifyContent: "center",
      width: "100%",
      [theme.breakpoints.up("xl")]: {
        maxWidth: "1920px",
      },
    },
  };
});
