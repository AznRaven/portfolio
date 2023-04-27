import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary fixed-top shadow">
      <div className="container-fluid bg-dark">
        {/* <a className="navbar-brand" href="#">Navbar</a> */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav d-flex">
            <li className="nav-item">
              <a className="nav-link active bg-dark text-white" aria-current="page" href="#top">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link bg-dark text-white" href="#skills">
                Skills
              </a>
            </li>
            <li className="nav-item bg-dark">
              <a className="nav-link text-white" href="#projects">
                Projects
              </a>
            </li>
            {/* <li className="nav-item ms-auto">
              <Link className="nav-link" to="/projects">
                Projects
              </Link>
            </li> */}
          </ul>
        </div>
      </div>
    </nav>
  );
}
