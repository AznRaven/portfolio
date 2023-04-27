import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Api from "./components/Api";
import Footer from "./components/Footer";
import MemoryMadness from "./components/MemoryMadness";
import TakeOrder from "./components/TakeOrder";
import Test from "./components/Test";
import Trivia from "./components/Trivia";
import Skills from "./Skills";
import Welcome from "./components/Welcome";
import { Navigation, Pagination, Scrollbar, A11y, EffectCube, EffectCoverflow } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/effect-cube";
import "swiper/css/effect-coverflow";

import Projects from "./Projects";
export default function Home() {
  const [api, setApi] = useState(false);
  const [mem, setMem] = useState(false);
  const [showWelcome, setShowWelcome] = useState(true);
  const [takeOrder, setTakeOrder] = useState(false);
  const [test, setTest] = useState(false);
  const [trivia, setTrivia] = useState(false);

  return (
    <>
      <a id="top"></a>
      <div className="hpcontainer justify-content-center align-items-center d-flex container-fluid">
        <div className="hpcontent container container-fluid">
          <section>
            <Welcome />
            {/* <div className="row container-fluid">
              <div className="showContent col-10">
                {api && <Api />}
                {mem && <MemoryMadness />}
                {showWelcome && <Welcome />}
                {takeOrder && <TakeOrder />}
                {trivia && <Trivia />}
                {test && <Test />}
              </div>
              <div className="col-2 p-3 d-flex flex-column align-items-center">
                <h2 id="projects" className="border p-3">
                  Projects
                </h2>
                <div
                  className="projLink m-2"
                  onClick={() => {
                    setShowWelcome(true);
                    setApi(false);
                    setMem(false);
                    setTakeOrder(false);
                    setTest(false);
                    setTrivia(false);
                  }}
                >
                  Me
                </div>
                <div
                  className="projLink m-2"
                  onClick={() => {
                    setTakeOrder(true);
                    setApi(false);
                    setMem(false);
                    setShowWelcome(false);
                    setTest(false);
                    setTrivia(false);
                  }}
                >
                  Take Orders
                </div>
                <div
                  className="projLink m-2"
                  onClick={() => {
                    setApi(true);
                    setMem(false);
                    setTakeOrder(false);
                    setShowWelcome(false);
                    setTest(false);
                    setTrivia(false);
                  }}
                >
                  Api Calls
                </div>
                <div
                  className="projLink m-2"
                  onClick={() => {
                    setMem(true);
                    setApi(false);
                    setTakeOrder(false);
                    setShowWelcome(false);
                    setTest(false);
                    setTrivia(false);
                  }}
                >
                  Memory Madness
                </div>
                <div
                  className="projLink m-2"
                  onClick={() => {
                    setTrivia(true);
                    setMem(false);
                    setApi(false);
                    setTakeOrder(false);
                    setShowWelcome(false);
                    setTest(false);
                  }}
                >
                  Trivia
                </div>
              </div>
            </div> */}
          </section>
          <section className="section" id="skills">
            <Skills />
          </section>
          <section className="section" id="projects">
            <Swiper
              // install Swiper modules
              modules={[Navigation, Pagination, Scrollbar, A11y, EffectCube,EffectCoverflow]}
              spaceBetween={50}
              slidesPerView={2}
              loop
              effect="cube"
              navigation
              pagination={{ clickable: true }}
              scrollbar={{ draggable: true }}
              onSwiper={(swiper) => console.log(swiper)}
              onSlideChange={() => console.log("slide change")}
            >
              <SwiperSlide>
                <TakeOrder />
              </SwiperSlide>
              <SwiperSlide>
                <Api />
              </SwiperSlide>
              <SwiperSlide>
                <MemoryMadness />
              </SwiperSlide>
              <SwiperSlide>
                <Trivia />
              </SwiperSlide>
              ...
            </Swiper>
          </section>

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
      </div>
    </>
  );
}
