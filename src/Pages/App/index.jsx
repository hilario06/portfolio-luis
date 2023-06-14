// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg' // de la carpeta public
import { BrowserRouter, useRoutes } from "react-router-dom";
import { Home } from "../Home";
import { MyProjects } from "../MyProjects";
import { Navbar } from "../../Components/Navbar";
import { Experiences } from "../Experiences";
import "./App.css";
import { Footer } from "../../Components/Footer";

export const AppRoutes = () => {
  let routes = useRoutes([
    { path: "/", element: <Home /> },
    { path: "/experiences", element: <Experiences /> },
    { path: "/projects", element: <MyProjects /> },
    { path: "*", element: <h1>404</h1> }
  ]);
  return routes;
}

const App = () => {

  return (
    <BrowserRouter>
      <Navbar />
      <AppRoutes />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
