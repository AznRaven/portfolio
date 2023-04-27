import { useEffect } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  // const buttons = document.querySelectorAll("button");

  // buttons.forEach((button) => {
  //   const buttons = document.querySelectorAll("button");

  //   button.addEventListener("click", () => {
  //     const currentState = button.getAttribute("data-state");

  //     if (!currentState || currentState === "closed") {
  //       button.setAttribute("data-state", "opened");
  //       button.setAttribute("aria-expanded", "true");
  //     } else {
  //       button.setAttribute("data-state", "closed");
  //       button.setAttribute("aria-expanded", "false");
  //     }
  //   });
  // });
  useEffect(()=>{
    const buttons = document.querySelectorAll("button-three");

            buttons.forEach((button) => {
              const buttons = document.querySelectorAll("button");

              button.addEventListener("click", () => {
                const currentState = button.getAttribute("data-state");

                if (!currentState || currentState === "closed") {
                  button.setAttribute("data-state", "opened");
                  button.setAttribute("aria-expanded", "true");
                } else {
                  button.setAttribute("data-state", "closed");
                  button.setAttribute("aria-expanded", "false");
                }
              });
            });
  },[])
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary fixed-top shadow">
      <div className="container-fluid bg-dark">
        {/* <a className="navbar-brand" href="#">Navbar</a> */}
        {/* <button
          className="button-three navbar-toggler bg-light"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
          <svg
            stroke="var(--button-color)"
            fill="none"
            class="hamburger"
            viewBox="-10 -10 120 120"
            width="250"
          >
            <path
              class="line"
              stroke-width="10"
              stroke-linecap="round"
              stroke-linejoin="round"
              d="m 20 40 h 60 a 1 1 0 0 1 0 20 h -60 a 1 1 0 0 1 0 -40 h 30 v 70"
            ></path>
          </svg>
        </button> */}
        <button
          class="button-three navbar-toggler bg-light"
          // aria-controls="primary-navigation"
          data-bs-toggle="collapse"
          type="button"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          onClick={() => {
            const buttons = document.querySelectorAll("button-three");

            buttons.forEach((button) => {
              const buttons = document.querySelectorAll("button");

              button.addEventListener("click", () => {
                const currentState = button.getAttribute("data-state");

                if (!currentState || currentState === "closed") {
                  button.setAttribute("data-state", "opened");
                  button.setAttribute("aria-expanded", "true");
                } else {
                  button.setAttribute("data-state", "closed");
                  button.setAttribute("aria-expanded", "false");
                }
              });
            });
          }}
          aria-label="Toggle navigation"
        >
          <svg
            stroke="var(--button-color)"
            fill="none"
            class="hamburger"
            viewBox="0 0 100 100"
            width="50"
          >
            <path
              class="line"
              stroke-width="10"
              stroke-linecap="round"
              stroke-linejoin="round"
              d="m 20 40 h 60 a 1 1 0 0 1 0 20 h -60 a 1 1 0 0 1 1 -40 h 30 v 70"
            ></path>
          </svg>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav d-flex">
            <li className="nav-item">
              <a
                className="nav-link active bg-dark text-white"
                aria-current="page"
                href="#top"
              >
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
