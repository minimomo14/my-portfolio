import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import "./Header.css";

function Header() {
    const dropdown = useRef(null);
    const [isActive, setIsActive] = useState(false);
    const onClick = () => setIsActive(!isActive);

    useEffect(() => {
        const pageClickEvent = (e: any): void => {
            if (dropdown.current !== null) {
                setIsActive(!isActive);
            }
        };
        if (isActive) {
            window.addEventListener("click", pageClickEvent);
            
        }
        console.log(isActive);

        return () => {
            window.removeEventListener("click", pageClickEvent);
        };
    }, [isActive]);
  return (
    <div className="header">
         {/* Header Section */}
         <div className="navbar">
               <button className="dropdown-icon"><img src="./icon/hamburger_icon.png" alt="" onClick={onClick} className="responsive"/></button> 
                <nav
                    ref={dropdown}
                    className={`menu ${isActive ? "active" : "inactive"}`}>
                <Link className="active" to="/homepage" >Home</Link>
                <Link to="/about-me">About Me</Link>
                <Link to="/technical-skills">Teachnical Skills</Link>
                <Link to="/my-projects">My Projects</Link>
                <Link to="/resume">Resume</Link>
                <Link to="/contact-me">Contact</Link>
                {/* <a className="active" href="#"><i className="fa-fa-fw-home">Home</i></a>
                <a href="#"><i className="fa-fa-fw-aboutMe">About Me</i></a>
                <a href="#"><i className="fa-fa-fw-myProjects">My Projects</i></a>
                <a href="#"><i className="fa-fa-fw-resume">Resume</i></a>
                <a href="#"><i className="fa-fa-fw-contact">Contact</i></a> */}
                </nav>
            </div>
    
    </div>
  );
}

export default Header;
