// The old site, kept until the rebuild replaces each page. App.jsx loads this file lazily, so
// none of the old JS, CSS or fonts reach the new pages. Its global CSS is scoped to .legacy.
//
// Import order matters: it repeats the order the old CSS had (the navbar, App.css, every old
// page, then index.css, which main.tsx imported after App). The old pages share same-name
// global rules, and the old site always loaded all of them, so they stay in one chunk.
import React, { Suspense, useEffect } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/navbar/Navbar";
import "../App.css";
export { default as About } from "../components/pages/About";
export { default as Contact } from "../components/pages/Contact";
export { default as ChatbotProject } from "../components/pages/Chatbot";
import "../index.css";
import "../fonts/AvenirNext-Bold-01.ttf";
import "../fonts/AvenirNext-BoldItalic-02.ttf";
import "../fonts/AvenirNext-DemiBold-03.ttf";
import "../fonts/AvenirNext-DemiBoldItalic-04.ttf";
import "../fonts/AvenirNext-Heavy-09.ttf";
import "../fonts/AvenirNext-HeavyItalic-10.ttf";
import "../fonts/AvenirNext-Italic-05.ttf";
import "../fonts/AvenirNext-Medium-06.ttf";
import "../fonts/AvenirNext-MediumItalic-07.ttf";
import "../fonts/AvenirNext-Regular-08.ttf";
import "../fonts/AvenirNext-UltraLight-11.ttf";
import "../fonts/AvenirNext-UltraLightItalic-12.ttf";

// Moved out of index.html: they blocked the first paint of every page, new ones included.
const externalStyles = [
  {
    href: "https://fonts.googleapis.com/css2?family=Oswald:wght@200;300;400;500;600;700&display=swap",
  },
  {
    href: "https://use.fontawesome.com/releases/v5.15.2/css/all.css",
    integrity: "sha384-vSIIfh2YWi9wW0r9iZe7RJPrKwp6bG+s9QZMoITbCckVJqGCCRhc+ccxNcdpHuYu",
    crossOrigin: "anonymous",
  },
  { href: "https://fonts.googleapis.com/css2?family=PT+Sans:wght@700&display=swap" },
];

export default function LegacyLayout() {
  useEffect(() => {
    for (const { href, integrity, crossOrigin } of externalStyles) {
      if (document.querySelector(`link[href="${href}"]`)) continue;
      const link = document.createElement("link");
      link.rel = "stylesheet";
      link.href = href;
      if (integrity) link.integrity = integrity;
      if (crossOrigin) link.crossOrigin = crossOrigin;
      document.head.appendChild(link);
    }
  }, []);

  return (
    <div className="legacy">
      <a className="skip-link" href="#main-content">
        Skip to main content
      </a>
      <Navbar />
      <main id="main-content" tabIndex="-1">
        <Suspense fallback={null}>
          <Outlet />
        </Suspense>
      </main>
    </div>
  );
}
