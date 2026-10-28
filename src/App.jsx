import React, { Suspense, lazy, useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
} from "react-router-dom";
import HomePage from "./components/pages/HomePage";
import CaseStudyPage from "./components/pages/CaseStudyPage";
import NotFoundPage from "./components/pages/NotFoundPage";

// The old pages load on demand, all in one chunk with their CSS (see legacy/LegacyLayout.jsx).
const legacy = () => import("./legacy/LegacyLayout");
const LegacyLayout = lazy(legacy);
const About = lazy(() => legacy().then((m) => ({ default: m.About })));
const Contact = lazy(() => legacy().then((m) => ({ default: m.Contact })));
const ChatbotProject = lazy(() => legacy().then((m) => ({ default: m.ChatbotProject })));

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
        <Route
          element={
            <Suspense fallback={null}>
              <LegacyLayout />
            </Suspense>
          }
        >
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/aichatbot" element={<ChatbotProject />} />
        </Route>
        <Route path="*" element={<NotFoundPage />} />
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
