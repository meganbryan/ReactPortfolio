import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import AboutMe from "./pages/AboutMe";
import Contact from "./pages/Contact";
import Portfolio from "./pages/Portfolio";

function App() {
  return (
      <Router>
        <div>
          <Route path="/" component={AboutMe} />
          <Route path="/contact" component={Contact} />
          <Route path="/portfolio" component={Portfolio} />
        </div>
      </Router>
  );
}

export default App;
