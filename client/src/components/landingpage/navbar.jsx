import { Link } from "react-router-dom";
import "./navbar.css";
import { useEffect, useState } from "react";
const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <div className={`navbar ${scrolled ? "scrolled" : ""}`} data-aos="fade-up">
      <div className="logo-container">
        <h1 className="logo-icon">∞</h1>
        <h1 className="logo">ClipboardOS</h1>
      </div>
      <nav className="nav">
        <ul className="nav-list">
          <li className="nav-item">
            <a href="/">Home</a>
          </li>
          <li className="nav-item">
            <a href="/features">Features</a>
          </li>
          <li className="nav-item">
            <a href="/pricing">Pricing</a>
          </li>
          <li className="nav-item">
            <a href="/docs">Docs</a>
          </li>
          <li className="nav-item">
            <a href="/faq">FAQ</a>
          </li>
          <div className="nav-actions">
            <div className="nav-divider"></div>

            <button className="nav-button-1">Log in</button>
            <button className="nav-button-2">Sign up</button>
          </div>
        </ul>
      </nav>
    </div>
  );
};
export default Navbar;
