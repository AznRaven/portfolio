export default function MemoryMadness() {
  return (
    <>
      <div className="page-fade-in shadow row justify-content-evenly py-3 rounded col-11">
        <h4 className="bg-primary text-light rounded-top">
          Mod 1 Project: Create A Game
        </h4>
        <p>Hosted on GitHub Pages</p>
        <div className="col-11 d-flex justify-content-evenly">
          <div
            class="card col-11 m-0 p-0 shadow-lg"
            style={{ width: "18rem;" }}
          >
            <h1 className="fs-3">Memory Madness</h1>
            <a href="https://aznraven.github.io/memory-madness/">
              <img
                src="https://res.cloudinary.com/djzwz76tr/image/upload/v1681872774/portfolio/Memory_znkj6a.png"
                class="card-img-top"
                alt="Trivia"
              />
            </a>

            <div class="card-body border">
              <p class="card-text">
                Test your memory and copy the pattern. See how far you can go.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
