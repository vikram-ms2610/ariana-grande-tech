import logo from './logo.svg';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Whoweare from './components/Whoweare';
import Services from './components/Services';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Insight from './components/titles/insight'
import Reachus from './components/titles/Reachus'
import Servicesnav from './components/titles/Servicesnav'

function App() {
  return (
    <>
     <>
    <BrowserRouter>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/insight" element={<Insight />} />
        <Route path="/reach-us" element={<Reachus />} />
        <Route path="/servicesnav" element={<Servicesnav />} />
      </Routes>
    </BrowserRouter>
    </>
    </>
  );
}

export default App;
