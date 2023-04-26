export default function TakeOrder() {

    return(
    <>
         <div className="page-fade-in shadow row justify-content-evenly py-3 rounded col-11">
            <h4 className="bg-primary text-light rounded-top">
              Mod 3 Project: Full Stack Mern
            </h4>
            <p>Hosted on Render</p>
            <p>Because this web app is hosted on Render.com, the backend takes about 15 seconds to load.</p>
            <p>To try out the app, <br/>Username="a"<br/> Password="a"</p>

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
    </>
    )
}