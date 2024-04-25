import React from "react";
import ReactDOM from "react-dom/client";
import { NextUIProvider } from "@nextui-org/react";
import App from "./App";
import "./index.css";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { HashRouter as Router } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import { TracingBeamDemo } from "./components/TracingBeamDemo";
import { StickyScrollRevealDemo } from "./components/StickyScrollRevealDemo";
import { CardHoverEffectDemo } from "./components/CardHoverEffectDemo";
import HeroScrollDemo from "./components/HeroScrollDemo";
import Home from "./components/pages/Home";
import Bt_Project from "./components/Bt_Project";
import Ai_Python from "./components/Ai_Python";
import Book_Club from "./components/Book_Club";
import Real_Estest from "./components/Real_Estest";
import "react-toastify/dist/ReactToastify.css";
import Education from "./components/Education";
import Contact from "./components/Contact";
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <NextUIProvider>
      <NextThemesProvider attribute="class" defaultTheme="dark">
        <Router>
          <App />
          <Routes forceRefresh={true} hashType="noslash">
            <Route path="/" element={<Home />} />
            <Route path="individual" element={<HeroScrollDemo />} />
            <Route path="Work Experience" element={<TracingBeamDemo />} />
            <Route path="/Contact/" element={<Contact />} />
            <Route path="/Education/" element={<Education />} />
            <Route path="/web" element={<StickyScrollRevealDemo />} />
            <Route path="/technology" element={<CardHoverEffectDemo />} />
            <Route path="/Bt_Project" element={<Bt_Project />} />
            <Route path="/Ai_Python" element={<Ai_Python />} />
            <Route path="/Book_Club" element={<Book_Club />} />
            <Route path="/Real_Estest" element={<Real_Estest />} />
          </Routes>
        </Router>
      </NextThemesProvider>
    </NextUIProvider>
  </React.StrictMode>
);
