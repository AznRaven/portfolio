import { Link } from "react-router-dom";
export default function Home() {
  return (
    <>
    <br/><br/>
      <h1>Hai D. Hoang</h1>
      <br/>
      <h3>
        I'm a full stack web developer with a passion for
        <br /> creating and solving problems through web development.
      </h3>
      {/* <div className='bg'>
        <img
          src={require('../images/endless-constellation.png')}
          alt="bg"
        ></img>
      </div> */}
      <br />
      <br />
      <div className>
        <div className="row d-flex justify-content-center">
          <div className="col-sm-12 col-lg-4 homebtn m-3">
            <button
              type="button"
              className="btn btn-secondary"
              onClick={() =>
                window.open("https://www.linkedin.com/in/aznraven/", "_blank")
              }
            >
              <img
                src={
                  "https://res.cloudinary.com/ddl0mgnds/image/upload/v1681009128/Portfolio/icons8-linkedin-48_b6becc.png"
                }
                alt="LinkedIn"
              ></img>
              LinkedIn
            </button>
          </div>
          <div className="col-sm-12 col-lg-4 homebtn m-3">
            <button
              type="button"
              className="btn btn-secondary"
              onClick={() =>
                window.open("https://github.com/AznRaven", "_blank")
              }
            >
              <img
                src={
                  "https://res.cloudinary.com/ddl0mgnds/image/upload/v1681008367/Portfolio/icons8-github-48_mh4i7k.png"
                }
                alt="GitHub"
              ></img>
              GitHub
            </button>
          </div>
          <div className="col-sm-12 col-lg-4 homebtn m-3">
            <button
              type="button"
              className="btn btn-secondary"
              onClick={() =>
                window.open(
                  "https://docs.google.com/document/d/17xRo62wEjg8YQbgbZ_eS0JkqOxG4RY9AXl8_2lhtchY/edit?usp=sharing",
                  "_blank"
                )
              }
            >
              <img
                src={
                  "https://res.cloudinary.com/ddl0mgnds/image/upload/v1681033283/Portfolio/icons8-resume-48_vcjlyl.png"
                }
                alt="Resume"
              ></img>
              Resume
            </button>
          </div>
        </div>
      </div>
      
    </>
  );
}
