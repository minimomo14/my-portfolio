import "./MyProjects.css";

function MyProjects() {
  return (
    <div className="myProjects">
      <div className="myProjects-content">
        <h1>My Projects</h1>
        <div className="myProjects-content-eachOne">
          <a href=""></a>
          <div className="myProjects-thumbnail">
            {/* src={`${process.env.PUBLIC_URL}/folderName/photoName.png`} */}
            <h1>Unit One Deliverable</h1>
            <img
              src={`${process.env.PUBLIC_URL}/thumbnail/Deliverable-destopview.png`}
              alt=""
            />{" "}
          </div>
          <div className="myProjects-content-details">
            <p>This project build with Basic HTML and CSS</p>
          </div>
        </div>

        <div className="myProjects-content-eachOne">
          <a href=""></a>
          <div className="myProjects-thumbnail">
            <img src="thumbnail" alt="" />
            <h1>LogIn-Form</h1>
          </div>
          <div className="myProjects-content-details">
            <p>This project build with Basic HTML and CSS</p>
          </div>
        </div>

        <div className="myProjects-content-eachOne">
          <a href=""></a>
          <div className="myProjects-thumbnail">
            <img
              src={`${process.env.PUBLIC_URL}/thumbnail/iceCreamWars.png`}
              alt=""
            />
            <h1>Ice-cream Wars</h1>
          </div>
          <div className="myProjects-content-details">
            <p>This project build with: </p>
          </div>
        </div>

        <div className="myProjects-content-eachOne">
          <div className="myProjects-thumbnail">
            <h1>Shoutout</h1>
          </div>
          <div className="myProjects-content-details">
            <p>This project build with: </p>
          </div>
        </div>
      </div>
      <br />

      {/* Collaborations projects */}
      <div className="myCollaborations-content">
        <h1>Collaborations with my Cohorts</h1>
        <div className="myProjects-content-eachOne">
          <a href=""></a>
          <div className="myProjects-thumbnail">
            <h1>LMJ</h1>
            <img
              src={`${process.env.PUBLIC_URL}/thumbnail/matching.png`}
              alt=""
            />
          </div>
          <div className="myProjects-content-details">
            <p>This project build with: </p>
          </div>
        </div>

        <div className="myProjects-content-eachOne">
          <a href=""></a>
          <div className="myProjects-thumbnail">
            <h1>Nutriyou</h1>
            <img
              src={`${process.env.PUBLIC_URL}/thumbnail/nutriyou.png`}
              alt=""
            />
          </div>
          <div className="myProjects-content-details">
            <p>This project build with: </p>
          </div>
        </div>

        <div className="myProjects-content-eachOne">
          <div className="myProjects-thumbnail">
            <h1>M&M Vet Clinic App</h1>
            <img
              src={`${process.env.PUBLIC_URL}/thumbnail/homepage.png`}
              alt=""
            />
            <img
              src={`${process.env.PUBLIC_URL}/thumbnail/aboutUs.png`}
              alt=""
            />
            <img
              src={`${process.env.PUBLIC_URL}/thumbnail/services.png`}
              alt=""
            />
          </div>
          <div className="myProjects-content-details">
            <p>This project build with: </p>
          </div>
        </div>

        <br />
      </div>
    </div>
  );
}

export default MyProjects;
