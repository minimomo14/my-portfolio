import "./AboutMe.css";

function AboutMe() {
  return (
    <div className="AboutMe">
      <div className="aboutmeContainer">
        <img
          className="profileImage"
          src="https://scontent-ort2-1.xx.fbcdn.net/v/t39.30808-6/240716595_10223533702023037_1289824671614962031_n.jpg?_nc_cat=109&ccb=1-5&_nc_sid=174925&_nc_ohc=GuNoxcL0XBQAX-RTTty&tn=cIqsz2ekovlB_Bzi&_nc_ht=scontent-ort2-1.xx&oh=00_AT9QddBih7dZ3WZoAQTw1bsoK7UZYL9KlPfMrqW4o2Cj7A&oe=6219A14F"
          alt=""
        />
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
        <button type="submit">Work with me</button>
      </div>
    </div>
  );
}

export default AboutMe;
