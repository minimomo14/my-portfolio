import "./ContactMe.css";

function ContactMe() {
  return (
    <div className="contactMe">
      <div className="contactMe-container">
        <h1>My Contact Information</h1>
        <p>Momo Miller</p>
        <p>mobile:810-599-4690</p>
        <p>email:minimomo14z@hotmail.com</p>
        <p>LinkedIn: https://www.linkedin.com/in/momo-miller/</p>
        <br />
        <div className="sendMe-emailForm">
          <form action="">
            <label htmlFor=""></label>
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ContactMe;
