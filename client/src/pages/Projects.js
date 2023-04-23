import { Link } from "react-router-dom";
// import data from '../data.js';

// const { feArr, beArr, cmArr, projArr } = data;

export default function Projects() {
  // let proj = projArr.map((x) => {
  //   return (
  //     <div className="skillIcon d-flex flex-column text-center col-5 col-sm-3 col-md-3 shadow">
  //       <div className="skillImg">
  //         <img className="skills" src={`${x.img}`} alt={x.name} />
  //       </div>

  //       <div className="iconText">
  //         <strong>{x.name}</strong>
  //       </div>
  //     </div>
  //   );
  // });
  return (
    <>
    <br/><br/>
      <div className="d-flex justify-content-evenly flex-wrap container-fluid">
        {/* Per Scholas */}
        <div className="row d-flex justify-content-evenly flex-wrap">
          <h1 className="bg-danger text-white ">Per Scholas</h1>
        {/* Project Row Mod 3*/}
        <div className="d-flex my-3 justify-content-evenly col-sm-12 col-md-5 col-lg-3">
          <div className="shadow row justify-content-evenly py-3 rounded">
            <h4 className="bg-primary text-light rounded-top">
              Mod 3 Project: Full Stack Mern
            </h4>
            <p>Hosted on Render</p>
            <div className="col-11 d-flex justify-content-evenly">
              {/* Trivia */}
              <div
                class="card col-11 m-0 p-0 shadow-lg"
                style={{ width: "18rem;" }}
              >
                <h1 className="fs-3">Take Order</h1>
                <a href="https://feorder.onrender.com/orders">
                  <img
                  src="https://res.cloudinary.com/djzwz76tr/image/upload/v1681869503/portfolio/FSOrder_uoixzm.png"
                  class="card-img-top"
                  alt="Trivia"
                />
                  </a>
                <div class="card-body border">
                  <p class="card-text">
                    Webapp to take orders at restaurants.
                  </p>
                </div>
              </div>
              
            </div>
          </div>
        </div>
        {/* Project Row Mod 2*/}
        <div className="d-flex my-3 justify-content-evenly col-sm-12 col-md-5 col-lg-3">
        <div className="shadow row justify-content-evenly py-3 rounded">
            <h4 className="bg-primary text-light rounded-top">
              Mod 2 Project: JavaScript React Api Calls
            </h4>
            <p>Hosted on Netlify</p>
            <div className="col-11 d-flex justify-content-evenly">
              
              {/* Api */}
              <div
                class="card col-11 m-0 p-0 shadow-lg"
                style={{ width: "18rem;" }}
              >
                <h1 className="fs-3">Api Calls</h1>
                
                <a href="https://res.cloudinary.com/djzwz76tr/image/upload/v1681928900/portfolio/Mod2_gogiwz.png">
                  <img
                  src="https://res.cloudinary.com/djzwz76tr/image/upload/v1681928900/portfolio/Mod2_gogiwz.png"
                  class="card-img-top"
                  alt="Trivia"
                />
                </a>
                
                <div class="card-body border">
                  <p class="card-text">
                    Giphy/Marvel/Pokemon/Rick and Morty/Weather.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Project Row Mod 1*/}
        <div className="d-flex my-3 justify-content-evenly col-sm-12 col-md-5 col-lg-3">
        <div className="shadow row justify-content-evenly py-3 rounded">
            <h4 className="bg-primary text-light rounded-top">
              Mod 1 Project: Create A Game
            </h4>
            <p>Hosted on GitHub Pages</p>
            <div className="col-11 d-flex justify-content-evenly">
              {/* Trivia */}
              <div
                class="card col-5 m-0 p-0 shadow-lg"
                style={{ width: "18rem;" }}
              >
                <h1 className="fs-4">Aznraven's Trivia</h1>
                <a href="https://aznraven.github.io/Trivia/">
                  <img
                  src="https://res.cloudinary.com/djzwz76tr/image/upload/v1681869508/portfolio/Trivia_vsyojd.png"
                  class="card-img-top"
                  alt="Trivia"
                />
                </a>
                
                <div class="card-body border">
                  <p class="card-text">
                    Test your CSS/JavaScript/HTML knowledge in this trivia game
                  </p>
                </div>
              </div>
              {/* Memory */}
              <div
                class="card col-5 m-0 p-0 shadow-lg"
                style={{ width: "18rem;" }}
              >
                <h1 className="fs-4">Memory Madness</h1>
                <a href="https://aznraven.github.io/memory-madness/">
                  <img
                  src="https://res.cloudinary.com/djzwz76tr/image/upload/v1681872774/portfolio/Memory_znkj6a.png"
                  class="card-img-top"
                  alt="Trivia"
                />
                </a>
                
                <div class="card-body border">
                  <p class="card-text">
                    Test your memory and copy the pattern. See how far you can
                    go.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        </div>
        
      </div>
    </>
  );
}
