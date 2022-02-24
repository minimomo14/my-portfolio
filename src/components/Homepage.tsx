import { Link } from "react-router-dom";
import "./Homepage.css";

function Homepage() {
  return (
    <div className="homepage">
      {/* Body Section * Create click image for each */}
      <div className="homepage-links">
        <Link to={"/about-me"}>
          <img
            className="homepage-linksImage"
            src={`${process.env.PUBLIC_URL}/image/about-me.png`}
            alt=""
          />
          About Me
        </Link>
      </div>

      <div className="homepage-links">
        <Link to={"/technical-skills"}>
          <img
            className="homepage-linksImage"
            src={`${process.env.PUBLIC_URL}/image/tech-skills.png`}
            alt=""
          />
          Technical Skills
        </Link>
      </div>

      <div className="homepage-links">
        <Link to={"/my-projects"}>
          <img
            className="homepage-linksImage"
            src={`${process.env.PUBLIC_URL}/image/my-projects.png`}
            alt=""
          />
          My Projects
        </Link>
      </div>

      <div className="homepage-links">
        <Link to={"/Resume"}>
          <img
            className="homepage-linksImage"
            src={`${process.env.PUBLIC_URL}/image/resume.png`}
            alt=""
          />
          Resume
        </Link>
      </div>

      <div className="homepage-links">
        <Link to={"/contact-me"}>
          <img
            className="homepage-linksImage"
            src={`${process.env.PUBLIC_URL}/image/contact-me.png`}
            alt=""
          />
          Contact Me
        </Link>
      </div>
    </div>
  );
}

export default Homepage;
