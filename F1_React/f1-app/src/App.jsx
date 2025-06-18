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
import MouseConfetti from "./components/mouse/MouseConfetti";





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
      <MouseConfetti />
      <SummonMax />
      <KonamiMonaco />
      <Nav />
      {routes}
      <Footer />
    </div>
  )
}

