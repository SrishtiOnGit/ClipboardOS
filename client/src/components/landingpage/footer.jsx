import { Link } from "react-router-dom";
import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="foot-container">
        <div className="logo-container">
          <h1 className="logo-icon">∞</h1>
          <h1 className="logo">ClipboardOS</h1>
        </div>

        <div className="footer-column">
          <label>Explore</label>

          <div className="footer-links">
            <Link to="/">Home</Link>
            <a href="#features">Features</a>
            <a href="#works">How it works?</a>
            <a href="#faq">Frequently Asked Questions</a>
            <Link to="/docs">Documentation</Link>
          </div>
        </div>

        <div className="footer-column">
          <label>Resources</label>

          <div className="footer-links">
            <Link to="/about">About Us</Link>
            <Link to="/blog">Blogs</Link>
            <Link to="/changelog">Changelog</Link>
          </div>
        </div>

        <div className="footer-column">
          <label>Connect</label>

          <div className="footer-links">
            <span>GitHub</span>
            <span>Slack ID: PixelDecoder</span>
            <span>Discord: srishti3008</span>
            <p>Email: srishtisrivastava3008@gmail.com</p>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2026 ClipboardOS. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
