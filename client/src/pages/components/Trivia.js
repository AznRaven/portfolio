export default function Trivia() {
  return (
    <>
      <div className="page-fade-in shadow row justify-content-center py-3 rounded col-12">
        <h4 className="bg-primary text-light rounded-top">
          Mod 1 Project: Create A Game
        </h4>
        <p>Hosted on GitHub Pages</p>
        <div className="col-12 d-flex justify-content-evenly">
          {/* Trivia */}
          <div
            class="card col-12 col-lg-6 m-0 p-0 shadow-lg"
            // style={{ width: "18rem;" }}
          >
            {/* <h1 className="fs-3">Aznraven's Trivia</h1> */}
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
        </div>
      </div>
    </>
  );
}
