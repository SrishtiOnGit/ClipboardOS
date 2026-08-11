import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/landingpage/navbar";
import Hero from "./components/landingpage/hero";
import Problem from "./components/landingpage/problems";
import Features from "./components/landingpage/features";
import Works from "./components/landingpage/works";
import FAQ from "./components/landingpage/faq";
import Footer from "./components/landingpage/footer";
import Dashboard from "./components/dashboard/dashboard";

function HomePage() {
  return (
    <>
      <Navbar />
      <Hero />
      <Problem />
      <Features />
      <Works />
      <FAQ />
      <Footer />
    </>
  );
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
  );
}

export default App;
