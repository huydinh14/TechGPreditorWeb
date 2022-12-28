import React from "react";
import Home from "./pages/Home/Home";
import Chart from "./pages/Chart/Chart";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import NotFound from "./pages/NotFound/NotFound";
import Menu from "./component/Menu/Menu/Menu";

function App() {
  return (
    <Router>
      <nav>
        <Menu />
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/chart" element={<Chart />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
