import "./ContactMe.css";

function ContactMe() {
  return (
    <div className="contactMe">
      <h1>My Contact Information</h1>
      <p>Momo Miller</p>
      <p>mobile: 810-599-4690</p>
      <p>email: minimomo14z@hotmail.com</p>
      <p>LinkedIn: https://www.linkedin.com/in/momo-miller/</p>
      <br />
      <div className="sendMe-emailForm">
        {/* mailto section */}
        <form action="">
            <label htmlFor="">Send me direct email: </label>
            <a href="mailto:minimomo14z@hotmail.com?Subject=Hello, ..." target="blank"> Click!!! </a>
        </form>
      </div>
    </div>
  );
}

export default ContactMe;
