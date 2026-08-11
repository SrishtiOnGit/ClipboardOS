import { FaSearchengin } from "react-icons/fa";
import { FaClipboardList, FaCopy } from "react-icons/fa6";
import "./works.css";

const Works = () => {
  const works = [
    {
      icon: FaCopy,
      title: "Copy Anything",
      description: "Just do CTRL + C",
    },
    {
      icon: FaClipboardList,
      title: "ClipboardOS Organizes It",
      description: "Automatically categorizes clipboard items.",
    },
    {
      icon: FaSearchengin,
      title: "Search and Paste",
      description: "Instantly search your clipboard history.",
    },
  ];
  return (
    <div className="works">
      <h1>
        Three Steps.<span>Zero Friction</span>
      </h1>
      <p className="description">
        ClipboardOS quietly saves everything you copy, organizes it
        automatically, and lets you find it in seconds.
      </p>
      <div className="works-container">
        {works.map((work, index) => (
          <div className="work" key={index}>
            <div className="work-icon">{work.icon()}</div>
            <h2 className="work-number">{index + 1}</h2>
            <h3>{work.title}</h3>
            <p>{work.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Works;
