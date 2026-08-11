import "./App.css";
import Navbar from "./components/landingpage/navbar";
import Hero from "./components/landingpage/hero";
import Problem from "./components/landingpage/problems";
import Features from "./components/landingpage/features";
import Works from "./components/landingpage/works";
import FAQ from "./components/landingpage/faq";
import Footer from "./components/landingpage/footer";

function App() {
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

export default App;
