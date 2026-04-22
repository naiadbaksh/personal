import React, { useEffect } from "react";
import Navbar from "./components/navbar/Navbar";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useHistory,
} from "react-router-dom";
import "./App.css";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Contact from "./components/pages/Contact";
import ChatBot from "./components/chatbot/chatbot.component";
import PathfindingProject from "./components/pages/PathfinderProject";
import eCommerceProject from "./components/pages/eCommerceProject";
import ChatbotProject from "./components/pages/Chatbot";
import ThoughtGardenProject from "./components/pages/ThoughtGardenProject";

function AppContent() {
  const history = useHistory();

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const redirect = params.get("redirect");

    if (redirect) {
      history.replace(decodeURIComponent(redirect));
    }
  }, [history]);

  return (
    <>
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about" exact component={About} />
        <Route path="/contact" exact component={Contact} />
        <Route
          path="/pathfindingvisualizer"
          exact
          component={PathfindingProject}
        />
        <Route path="/ecommerce" exact component={eCommerceProject} />
        <Route path="/aichatbot" exact component={ChatbotProject} />
        <Route path="/thoughtgarden" exact component={ThoughtGardenProject} />
      </Switch>
      <ChatBot />
    </>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
