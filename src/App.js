import "./App.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Nav from "./Components/Nav";
import Home from "./Pages/home";
import About from "./Pages/about";
import Invitation from "./Pages/invitation";

function App() {
  return (
    <Router>
      <div className="App">
        {/* <Nav /> */}
        <Routes>
          <Route path="/" exact element={<Invitation />} />
          <Route path="about" element={<About />} />
        </Routes>
      </div>
    </Router>
  );
}
<h1>nhh</h1>;

export default App;
