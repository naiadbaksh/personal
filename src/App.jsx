import React, { useEffect } from "react";
import Navbar from "./components/navbar/Navbar";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Outlet,
  useNavigate,
} from "react-router-dom";
import "./App.css";
import HomePage from "./components/pages/HomePage";
import About from "./components/pages/About";
import Contact from "./components/pages/Contact";
import ChatbotProject from "./components/pages/Chatbot";
import CaseStudyPage from "./components/pages/CaseStudyPage";

// The old site, kept until the rebuild replaces each page. Its global CSS is scoped to .legacy.
function LegacyLayout() {
  return (
    <div className="legacy">
      <a className="skip-link" href="#main-content">
        Skip to main content
      </a>
      <Navbar />
      <main id="main-content" tabIndex="-1">
        <Outlet />
      </main>
    </div>
  );
}

function AppContent() {
  const navigate = useNavigate();

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const redirect = params.get("redirect");

    if (redirect) {
      navigate(decodeURIComponent(redirect), { replace: true });
    }
  }, [navigate]);

  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/thoughtgarden"
          element={<CaseStudyPage slug="thoughtgarden" />}
        />
        <Route path="/ecommerce" element={<CaseStudyPage slug="ecommerce" />} />
        <Route
          path="/pathfindingvisualizer"
          element={<CaseStudyPage slug="pathfindingvisualizer" />}
        />
        <Route element={<LegacyLayout />}>
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/aichatbot" element={<ChatbotProject />} />
        </Route>
      </Routes>
    </>
  );
}

function App() {
  return (
    <Router future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
      <AppContent />
    </Router>
  );
}

export default App;
