import HeroScrollDemo from "./components/HeroScrollDemo";

import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/pages/Home";
import { TracingBeamDemo } from "./components/TracingBeamDemo";
import { StickyScrollRevealDemo } from "./components/StickyScrollRevealDemo";
import { CardHoverEffectDemo } from "./components/CardHoverEffectDemo";
import { GridBackgroundDemo } from "./components/GridBackgroundDemo";
import Bt_Project from "./components/Bt_Project";
import Ai_Python from "./components/Ai_Python";
import Book_Club from "./components/Book_Club";
import Real_Estest from "./components/Real_Estest";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Education from "./components/Education";

import Contact from "./components/Contact";
export default function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/individual" element={<HeroScrollDemo />} />
        <Route path="/Work Experience" element={<TracingBeamDemo />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Education" element={<Education />} />
        <Route path="/web" element={<StickyScrollRevealDemo />} />
        <Route path="/technology" element={<CardHoverEffectDemo />} />
        <Route path="/Bt_Project" element={<Bt_Project />} />
        <Route path="/Ai_Python" element={<Ai_Python />} />
        <Route path="/Book_Club" element={<Book_Club />} />
        <Route path="/Real_Estest" element={<Real_Estest />} />
      </Routes>
      <ToastContainer />
      <GridBackgroundDemo />
    </>
  );
}
