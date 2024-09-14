import "../index.css";
import makeinindia from "../assets/makeinindia.png";

export const Landing = () => {
  return (
    <div className="container">
      <img src={makeinindia} className="logo" />
      <a
        href="https://github.com/BhusareHarshad/MultimodalRAG"
        class="github-link"
      >
        Github
      </a>
      <a href="" className="signin">
        Sign In
      </a>
      <div className="centered-container">
        <img src={makeinindia} className="center-logo" alt="Make in India" />
        <div className="center-content">
          <h2 className="bold-text">
            Transcribe, Query or Talk to any video with one click{" "}
          </h2>
          <input type="text" className="input-box" placeholder="Enter URL..." />
          <button className="start-button">Start</button>
        </div>
      </div>
    </div>
  );
};
