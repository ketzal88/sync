import { makeStyles } from "@mui/styles";

export const useApartmentsPageStyles = makeStyles((theme) => {
  return {
    apartmentsContainer: {
      width: '100%'
    },
    apartamentosTitle: {
      color: theme.palette.primary.syncBlue
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
