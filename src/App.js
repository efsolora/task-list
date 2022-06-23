import "./App.css";
import React from "react";
import Home from "./components/Home";
import Menu from "./components/Menu";
import Tareas from "./components/Tareas";
import SobreNosotros from "./components/SobreNosotros";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App" id="inputs">
      <Router>
        <Menu />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Tareas" element={<Tareas />} />
          <Route path="/Sobre-Nosotros" element={<SobreNosotros />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
