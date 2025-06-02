import { useRoutes } from "react-router-dom";
import { useState } from "react";
import Nav from './components/nav/Nav'
import Home from './pages/Home';
import Drivers from "./pages/Drivers";
import Races from "./pages/Races";
import Standings from "./pages/Standings";




export default function App() {
  const routes = useRoutes([
    { path: '/', element: <Home /> },
    { path: '/drivers', element: <Drivers /> },
    {path : '/races', element: <Races />},
    {path: '/standings', element: <Standings />},
  ])

  return (
    <div className="App">
      <Nav />
      {routes}
    </div>
  )
}

