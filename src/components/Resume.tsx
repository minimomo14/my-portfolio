import "./Resume.css";

function Resume() {
    return (
        <div className="resume">
            <div className="resume-container">
            <h1>My Resume</h1>
            <img src={`${process.env.PUBLIC_URL}/resume/my-resume.png`} alt="" />
            <a href={`${process.env.PUBLIC_URL}/resume/my-resume.pdf`} target="_blank">Click here to download my resume.</a>
            </div>
        </div>
    );
}

export default Resume;