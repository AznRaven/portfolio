import { Link } from "react-router-dom";
import Footer from "./components/Footer";
export default function Home() {
  return (
    <>
      <br />
      <br />
      <div className="hpcontainer justify-content-center align-items-center d-flex">
        <div className="hpcontent">
          <div className="row border">
            <div className="col-8">
              <h1>Welcome.</h1>
              <br />
              <h3>
                My name is Hai Hoang. I'm a full stack developer based in
                Dallas, TX. <br />
                <br />
                I'm passionate about creating and solving problems through web
                development.
              </h3>
            </div>
            <div className="col-4"></div>
          </div>

          <br />
          <br />
          <div className>
            <div className="row d-flex justify-content-center">
              <div className="col-sm-12 col-lg-4 homebtn m-3">
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={() =>
                    window.open(
                      "https://www.linkedin.com/in/aznraven/",
                      "_blank"
                    )
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
        </div>

        <Footer />
      </div>
    </>
  );
}
