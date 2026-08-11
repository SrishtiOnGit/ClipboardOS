import "./dash-nav.css";
import { useEffect, useState } from "react";
import { FaUserAlt } from "react-icons/fa";
import { IoNotifications } from "react-icons/io5";

const DashNav = () => {
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
        <h1 className="logo-icon-dash">∞</h1>
        <h1 className="logo-dash">ClipboardOS</h1>
      </div>
      <div className="search">
        <input type="text" placeholder="Search" />
        <span>Ctrl + K</span>
      </div>

      <div className="button-group">
        <button className="dashnav-button">
          <IoNotifications />
        </button>
        <button className="dashnav-button">
          <FaUserAlt />
        </button>
      </div>
    </div>
  );
};
export default DashNav;
