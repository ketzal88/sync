import { Link } from "react-router-dom";
import { Box, Grid, Stack } from "@mui/material";
import { navLinks } from "./headerLinksList";

const Header = () => {
  return (
    <Stack sx={{ position: "relative" }}>
      <Grid
        container
        spacing={0}
        sx={{ position: "absolute", paddingLeft: "454px" }}
      >
        {navLinks.map((item, index) => (
          <Grid
            key={index}
            item
            sx={{ paddingRight: "24px", fontSize: "23px", paddingTop: "95px" }}
          >
            <Link to={item.link}>{item.label}</Link>
          </Grid>
        ))}
        <Grid
          item
          sx={{ paddingLeft: "149px", fontSize: "23px", paddingTop: "95px" }}
        >
          <Link to="/apartaments">VITRIUM CAPITAL</Link>
        </Grid>
        <Box
          sx={{
            marginLeft: "40px",
            width: "114px",
            height: "187px",
            backgroundColor: "#0A1217",
            border: "1px solid #707070",
            borderRadius: "0px 0px 23px 23px;",
          }}
        ></Box>
      </Grid>
    </Stack>
  );
};

export default Header;
