import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import PoojaGrid from "./components/PoojaGrid";
import BookingForm from "./components/BookingForm";
import Footer from "./components/Footer";
import { poojas } from "./data/samplePoojas";

export default function App() {
  return (
    <div className="font-devanagari bg-cream text-maroon">
      <Navbar />
      <Hero />
      <PoojaGrid items={poojas} />
      <BookingForm />
      <Footer />
    </div>
  );
}