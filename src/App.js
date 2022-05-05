import theme from "./theme/default";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./routes/home";
import { Outlet, useLocation } from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";

function App() {
  const location = useLocation();
  return (
    <ThemeProvider theme={theme}>
      {location.pathname === "/" ? (
        <Home />
      ) : (
        <>
          <Header />
          <Outlet />
          <Footer />
        </>
      )}
    </ThemeProvider>
  );
}

export default App;
