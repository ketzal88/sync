import theme from "./theme/default";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./routes/home";
import { Outlet, useLocation } from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";
import { useRef } from "react";

function App() {
  const location = useLocation();
  const headerRef = useRef(null);
  return (
    <ThemeProvider theme={theme}>
      <Header headerRef={headerRef} />
      {location.pathname === "/" ? <Home headerRef={headerRef} /> : <Outlet />}
      <Footer />
    </ThemeProvider>
  );
}

export default App;
