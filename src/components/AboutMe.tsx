import { Link } from "react-router-dom";
import "./AboutMe.css";

function AboutMe() {
  return (
    <div className="aboutMe">
        {/* Main Section */}
      <div className="aboutMe-container">
      <img className="profileImage" src={`${process.env.PUBLIC_URL}/image/momo.png`} alt="" />
        <div className="aboutMe-text">
        <h1>About Me</h1>
        <p>
          Hi there! I'm Momo Miller, a frontend web developer. I graduated from
          Full Stack JavaScript Bootcamp at Grand Circus Detroit, Michigan. I
          transition from Financial Industry experience as a Relationship Banker
          into frontend web development field, with a little spark of interested
          It's become a passion, and as I always wondering how a website or
          application was made and thinking of ways to create and improve them.
        </p>
        <p>
          I have gained technical experience in JavaScript, REACT, Node.JS as
          well as HTML and CSS. I love being able to achieve difficult sections
          of code and trying to figure out the cleanest solution. As a developer
          perspective, it’s completely bringing a huge sense of fulfillment
          knowing that I’ve improved both the experience of the user and other
          developers working alongside me.
        </p>
        <Link to={"/contact-me"}><button type="submit">Work with me</button></Link>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
