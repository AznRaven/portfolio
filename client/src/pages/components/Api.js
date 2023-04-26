export default function Api() {
  return (
    <>
      
        <div className="page-fade-in shadow row justify-content-evenly py-3 rounded col-11">
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
     
    </>
  );
}
