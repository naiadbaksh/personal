import React, { useEffect } from "react";
import Navbar from "./components/navbar/Navbar";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
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
  const navigate = useNavigate();

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const redirect = params.get("redirect");

    if (redirect) {
      navigate(redirect, { replace: true });
    }
  }, [navigate]);

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route
          path="/pathfindingvisualizer"
          element={<PathfindingProject />}
        />
        <Route path="/ecommerce" element={<eCommerceProject />} />
        <Route path="/aichatbot" element={<ChatbotProject />} />
        <Route path="/thoughtgarden" element={<ThoughtGardenProject />} />
      </Routes>
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
