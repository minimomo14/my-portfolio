import "./Footer.css";

function Footer() {
  return (
    <div className="footer">
      {/* Footer Section */}
      <h1>Thank you for Visiting ! </h1>
      <div className="footer-icons">
        <a
          href="https://github.com/minimomo14"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={`${process.env.PUBLIC_URL}/icon/github.svg`} alt="" />
        </a>

        <a
          href="https://www.linkedin.com/in/momo-miller/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={`${process.env.PUBLIC_URL}/icon/linkedin.svg`} alt="" />
        </a>

        <a href="/contact-me" 
        target="_blank" 
        rel="noopener noreferrer">
          <img src={`${process.env.PUBLIC_URL}/icon/mail.svg`} alt="" />
        </a>
      </div>
    </div>
  );
}

export default Footer;
