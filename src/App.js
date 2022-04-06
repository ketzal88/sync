import logo from './logo.svg';
import './App.scss';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './routes/home';
import { Outlet, Link, useLocation } from "react-router-dom";

function App() {
  const location = useLocation();
  console.log("asd", location.pathname);
  return (
    <div className="App"> 
      <Header />
      { location.pathname === "/" ? <Home /> : <Outlet /> }
      <Footer />
    </div>
  );
}

export default App;
