import { makeStyles } from "@mui/styles";

export const useApartmentsPageStyles = makeStyles((theme) => {
  return {
    apartmentsContainer: {
      width: '100%'
    },
    apartamentosTitle: {
      color: theme.palette.primary.syncBlue,
      [theme.breakpoints.up("md")]: {
        fontSize: "65px !important",
      },
    },
    filtersContainer: {
      justifyContent: "flex-start",
      marginBottom: "80px !important",
      marginTop: "20px !important"
    },
    titleContainer: {
      marginBottom: "46px",
      width: "100%",
    },
    wrapper: {
      alignItems: 'center',
      padding: '0 100px',
      margin: '60px auto 0 auto !important',
      width: '100%',
      [theme.breakpoints.up("xl")]: {
        maxWidth: "1920px",
      },
    }
  }
});
