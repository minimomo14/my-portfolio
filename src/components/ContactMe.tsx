import React from "react";
import "./ContactMe.css";

function ContactMe() {
  return (
    <div className="contactMe">
        <h1>My Contact Information</h1>
        <p>Momo Miller</p>
        <p>mobile:810-599-4690</p>
        <p>email:minimomo14z@hotmail.com</p>
        <p>LinkedIn: https://www.linkedin.com/in/momo-miller/</p>
        <br />
        <div className="sendMe-emailForm">
          <form action="">
            <label htmlFor="">FullName</label>
            <input type="text" placeholder="Enter your name here" />
            <br />
            <label htmlFor="">Email</label>
            <input type="text" placeholder="Enter your email" />
            <br />
            <label htmlFor="">Message: </label>
            {/* cols="30" rows="10" */}
            <textarea
              name="message"
              id=""
              placeholder="write your message here"
            ></textarea>
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
  );
}

export default ContactMe;
