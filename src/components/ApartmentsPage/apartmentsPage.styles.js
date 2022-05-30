import { makeStyles } from "@mui/styles";

export const useApartmentsPageStyles = makeStyles((theme) => {
  return {
    agendaButton: {
      height: "83px !important",
      borderRadius: "46px !important",
      backgroundColor: "#F1804F !important",
      py: "28px",
      [theme.breakpoints.up("xl")]: {
        width: "356px !important",
      },
      [theme.breakpoints.down("xl")]: {
        width: "318px !important",
      },
      [theme.breakpoints.down("md")]: {
        margin: "0 auto !important",
        height: "50px !important",
        width: "250px !important"
      }
    },
    agendaText: {
      color: "white",
      fontWeight: "bold !important",
      [theme.breakpoints.up("lg")]: {
        fontSize: "21px !important",
      },
      [theme.breakpoints.up("md")]: {
        fontSize: "17px !important"
      },
      [theme.breakpoints.down("md")]: {
        fontSize: "12px !important"
      }
    },
    apartmentCard: {
      width: "100%",
      padding: "6% !important",
      backgroundColor: "#132127",
      borderRadius: "40px",
      margin: "0 0 43px 0 !important",
      textTransform: "none",
      [theme.breakpoints.down("md")]: {
        flexDirection: "column !important"
      }
    },
    apartmentsContainer: {
      width: "100%",
    },
    apartmentImageContainer: {
      width: "33.33%",
      [theme.breakpoints.down("md")]: {
        width: "100%"
      }
    },
    apartmentImage: {
      height: "100%",
      width: "100%",
      [theme.breakpoints.down("md")]: {
        height: "33.33% !important",
        width: "100% !important"
      }
    },
    apartmentName: {
      fontSize: "50px !important",
      fontWeight: "900 !important",
      color: "white",
      [theme.breakpoints.down("md")]: {
        fontSize: "46px !important",
      }
    },
    apartmentSize: {
      fontSize: "28px !important",
      color: "white !important",
      [theme.breakpoints.down("md")]: {
        fontSize: "20px !important",
      }
    },
    apartamentosTitle: {
      marginTop: "72px !important",
      color: theme.palette.primary.syncBlue,
      [theme.breakpoints.up("md")]: {
        fontSize: "65px !important",
      },
      [theme.breakpoints.down("md")]: {
        fontSize: "28px !important"
      }
    },
    buttonsContainer: {
      alignItems: "flex-end !important",
      width: "30% !important",
      [theme.breakpoints.down("md")]: {
        width: "100% !important"
      }
    },
    buttons: {
      marginBottom: "30px !important",
      [theme.breakpoints.down("md")]: {
        marginBottom: "0 !important"
      }
    },
    cardBody: {
      justifyContent: "space-between",
      [theme.breakpoints.up("lg")]: {
        width: "41.66% !important",
      },
      [theme.breakpoints.up("md")]: {
        width: "35% !important"
      },
      [theme.breakpoints.down("md")]: {
        width: "100% !important"
      }
    },
    descargarButton: {
      height: "83px !important",
      borderRadius: "46px !important",
      borderColor: "#F1804F !important",
      py: "28px",
      [theme.breakpoints.up("xl")]: {
        width: "356px !important",
      },
      [theme.breakpoints.down("xl")]: {
        width: "318px !important",
      },
      [theme.breakpoints.down("md")]: {
        margin: "40px auto 20px auto !important",
        height: "50px !important",
        width: "250px !important"
      }
    },
    descargarText: {
      color: "white",
      fontWeight: "bold !important",
      letterSpacing: -0.9,
      [theme.breakpoints.up("lg")]: {
        fontSize: "21px !important",
      },
      [theme.breakpoints.up("md")]: {
        fontSize: "17px !important"
      },
      [theme.breakpoints.down("md")]: {
        fontSize: "12px !important"
      }
    },
    dormitoriosText: {
      fontSize: "28px !important",
      color: "white",
      [theme.breakpoints.down("md")]: {
        fontSize: "17px !important",
        fontWeight: "700 !important"
      }
    },
    filterBox: {
      display: "flex"
    },
    filtersContainer: {
      justifyContent: "flex-start",
      marginBottom: "80px !important",
      marginTop: "20px !important",
      [theme.breakpoints.down("md")]: {
        justifyContent: "space-between !important"
      }
    },
    titleContainer: {
      marginBottom: "46px",
      width: "100%",
    },
    pisoText: {
      fontSize: "28px !important",
      color: "white",
      [theme.breakpoints.down("md")]: {
        fontSize: "17px !important",
        fontWeight: "700 !important"
      }
    },
    pisosFilter: {
      width: "25% !important", 
      marginRight: "176px !important",
      [theme.breakpoints.down("md")]: {
        marginRight: "0 !important",
        width: "45% !important"
      }
    },
    tiposFilter: {
      width: "25% !important", 
      [theme.breakpoints.down("md")]: {
        width: "45% !important"
      }
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
      [theme.breakpoints.down("md")]: {
        padding: "0 30px"
      }
    },
  };
});
