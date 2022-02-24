import "./MyProjects.css";

function MyProjects() {
  return (
    <div className="myProjects">
      <div className="myProjects-content">
        <h1>My Projects</h1>
        <div className="myProjects-content-eachOne">
          <a href=""></a>
          <div className="myProjects-content-screenshot">
            <img src="thumbnail" alt="" />
            <h1>LogIn-Form</h1>
          </div>
          <div className="myProjects-content-details">
            <p>This project build with Basic HTML and CSS</p>
          </div>
        </div>

        <div className="myProjects-content-eachOne">
          <a href=""></a>
          <div className="myProjects-content-screenshot">
            <img src="" alt="" />
            <h1>Ice-cream Wars</h1>
          </div>
          <div className="myProjects-content-details">
            <p>This project build with : </p>
          </div>
        </div>

        <div className="myProjects-content-eachOne">
          <div className="myProjects-content-screenshot">
            <h1>Shoutout</h1>
          </div>
          <div className="myProjects-content-details">
            <p>This project build with Basic HTML and CSS</p>
          </div>
        </div>

        <br />
        <div className="myProjects-content">
          <h1>Collaborations with my cohorts</h1>
          <div className="myProjects-content-eachOne">
            <a href=""></a>
            <div className="myProjects-content-screenshot">
              <img src="" alt="" />
              <h1>LogIn-Form</h1>
            </div>
            <div className="myProjects-content-details">
              <p>This project build with : </p>
            </div>
          </div>

          <div className="myProjects-content-eachOne">
            <a href=""></a>
            <div className="myProjects-content-screenshot">
              <img src="" alt="" />
              <h1>Ice-cream Wars</h1>
            </div>
            <div className="myProjects-content-details">
              <p>This project build with : </p>
            </div>
          </div>

          <div className="myProjects-content-eachOne">
            <div className="myProjects-content-screenshot">
              <h1>Shoutout</h1>
            </div>
            <div className="myProjects-content-details">
              <p>This project build with : </p>
            </div>
          </div>

          <br />
        </div>
      </div>
    </div>
  );
}

export default MyProjects;
