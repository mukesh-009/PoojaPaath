import React from "react";
import Navbar from "./components/Navbar";
import FrontPage from "./components/FrontPage";
import PoojaGrid from "./components/PoojaGrid";

import Footer from "./components/Footer";

import { poojas } from "./data/samplePoojas";

export default function App() {
  return (
    <div className=" pt-20 font-devanagari bg-cream text-maroon">
      <Navbar />
      <FrontPage />
      <PoojaGrid items={poojas} />
      <Footer />
    </div>
  );
}