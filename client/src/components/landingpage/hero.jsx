import "./hero.css";

const Hero = () => {
  return (
    <div className="hero">
      <h3>✨ Now in early access.</h3>
      <h2>
        Your second brain
        <span> for everything you copy.</span>
      </h2>
      <p>
        <b>ClipboardOS</b> remembers every snippet, command, prompt, link and
        note you copy.
      </p>
      <div className="button-container">
        <button className="get-started">Get Started</button>
        <button className="docs">Documentation</button>
      </div>
    </div>
  );
};

export default Hero;
