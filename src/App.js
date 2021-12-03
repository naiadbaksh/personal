import React from "react";
import Navbar from "./components/navbar/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Contact from "./components/pages/Contact";
import ChatBot from "./components/chatbot/chatbot.component";
import PathfindingProject from "./components/pages/PathfinderProject";
import eCommerceProject from "./components/pages/eCommerceProject";

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" exact component={About} />
          <Route path="/contact" exact component={Contact} />
          <Route
            path="/pathfindingvisualizer"
            exact
            component={PathfindingProject}
            id="pathfinder"
          />
          <Route
            path="/ecommerce"
            exact
            component={eCommerceProject}
            id="ecommerce"
          />
          <ChatBot />
        </Switch>
      </Router>
    </>
  );
}

export default App;
