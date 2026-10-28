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
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Contact from "./components/pages/Contact";
import PathfindingProject from "./components/pages/PathfinderProject";
import ECommerceProject from "./components/pages/eCommerceProject";
import ChatbotProject from "./components/pages/Chatbot";
import ThoughtGardenProject from "./components/pages/ThoughtGardenProject";
import ThemeToggle from "./components/theme-toggle/ThemeToggle";

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
      {/* Temporary place for testing; moves into the new nav in Phase 3. */}
      <div className="fixed bottom-4 left-4 z-50">
        <ThemeToggle />
      </div>
      <Routes>
        <Route element={<LegacyLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route
            path="/pathfindingvisualizer"
            element={<PathfindingProject />}
          />
          <Route path="/ecommerce" element={<ECommerceProject />} />
          <Route path="/aichatbot" element={<ChatbotProject />} />
          <Route path="/thoughtgarden" element={<ThoughtGardenProject />} />
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
