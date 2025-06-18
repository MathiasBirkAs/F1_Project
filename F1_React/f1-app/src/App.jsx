import { useRoutes } from "react-router-dom";
import { useState } from "react";
import Nav from './components/nav/Nav'
import Home from './pages/Home';
import Drivers from "./pages/Drivers";
import Races from "./pages/Races";
import Standings from "./pages/Standings";
import News from "./pages/News";
import Footer from "./components/footer/Footer";
import KonamiMonaco from "./components/konamiMonaco/KonamiMonaco";
import SummonMax from "./components/summonmax/SummonMax";





export default function App() {
  const routes = useRoutes([
    { path: '/', element: <Home /> },
    { path: '/drivers', element: <Drivers /> },
    {path : '/races', element: <Races />},
    {path: '/standings', element: <Standings />},
    {path: '/news', element: <News />},
  ])

  return (
    <div className="App">
      <SummonMax />
      <KonamiMonaco />
      <Nav />
      {routes}
      <Footer />
    </div>
  )
}

