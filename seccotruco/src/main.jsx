import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout.jsx";
import App from './App.jsx'
import ScoreboardPaulista from "./pages/ScoreboardPaulista.jsx";
import ScoreboardMineiro from "./pages/ScoreboardMineiro.jsx";
import HowToPlay from "./pages/HowToPlay.jsx";
import OrderOfCards from "./pages/OrderOfCards.jsx";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<App />}/>
          <Route path="/scoreboard-paulista" element={<ScoreboardPaulista />}/>
          <Route path="/scoreboard-mineiro" element={<ScoreboardMineiro />}/>
          <Route path="/how-to-play" element={<HowToPlay />}/>
          <Route path="/order-of-cards" element={<OrderOfCards />}/>
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
