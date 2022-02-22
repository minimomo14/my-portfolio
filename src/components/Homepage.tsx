import AboutMe from "./AboutMe";
import ContactMe from "./ContactMe";
import "./Homepage.css";
import MyProjects from "./MyProjects";
import Resume from "./Resume";

function Homepage() {
    return (
        <div className="Homepage">
            <h1>Header</h1>
            <h2>Banner or dropdown menus</h2>
            <AboutMe />
            <ContactMe />
            <MyProjects />
            <Resume />
        </div>
    );
}

export default Homepage;