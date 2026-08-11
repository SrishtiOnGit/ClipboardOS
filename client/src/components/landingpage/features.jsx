import React from "react";
import "./features.css";
import { FaClipboardList, FaSearchengin } from "react-icons/fa6";
import { TbPrompt } from "react-icons/tb";
import { FaMapPin } from "react-icons/fa";
import { SiCcleaner } from "react-icons/si";
import { MdPrivacyTip } from "react-icons/md";

const Features = () => {
  const features = [
    {
      icon: FaClipboardList,
      title: "Unlimited Clipboard History",
      description:
        "Never lose something you copied 5 minutes ago or 5 months ago.",
    },
    {
      icon: FaSearchengin,
      title: "Universal Search",
      description:
        "Search text, links, prompts, notes, emails, commands, and code instantly.",
    },
    {
      icon: TbPrompt,
      title: "AI Prompts",
      description:
        "ClipboardOS automatically recognizes whether something is Code, Link,etc.",
    },
    {
      icon: FaMapPin,
      title: "Pin Important Items",
      description: "Keep your frequently used clipboard items at the top.",
    },
    {
      icon: MdPrivacyTip,
      title: "Auto Cleanup",
      description:
        "Delete temporary clipboard items after a chosen time while keeping important ones.",
    },
    {
      icon: SiCcleaner,
      title: "Privacy Mode",
      description:
        "Sensitive copied content stays encrypted and can automatically disappear.",
    },
  ];
  return (
    <div className="features-container">
      <h1>
        Built for how <span>you actually work.</span>.
      </h1>
      <p className="description">
        Every feature is built to make copying, organizing, and finding
        information effortless.
      </p>
      <div className="features">
        {features.map((feature, index) => (
          <div className="feature" key={index}>
            <feature.icon className="feature-icon" />
            <h3 className="feature-title">{feature.title}</h3>
            <p className="feature-description">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Features;
