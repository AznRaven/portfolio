import React, { useEffect } from "react";
import data from "../data.js";
import { Navigation, Pagination, Scrollbar, A11y,EffectFade,EffectCreative, EffectCube, EffectCoverflow,EffectCards  } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/effect-cube';
import 'swiper/css/effect-coverflow';
import 'swiper/css/effect-cards';
import 'swiper/css/effect-creative';
import 'swiper/css/effect-fade';


const { feArr, beArr, cmArr } = data;

// FLIP ICONS AND DISPLAY DETAILS ON THE BACK

export default function Skills() {
  let fe = feArr.map((x) => {
    return (
      <div className="skillIcon border border-primary d-flex flex-column text-center col-5 col-sm-3 col-lg-1 shadow justify-content-between">
        <div className="skillImg">
          <img className="skills" src={`${x.img}`} alt={x.name} />
        </div>

        <div className="iconText ">
          <strong>{x.name}</strong>
        </div>
      </div>
    );
  });
  // end of feArr

  let be = beArr.map((x) => {
    return (
      <div className="skillIcon border border-primary d-flex flex-column text-center col-5 col-sm-3 col-lg-1 shadow">
        <div className="skillImg">
          <img className="skills" src={`${x.img}`} alt={x.name} />
        </div>

        <div className="iconText">
          <strong>{x.name}</strong>
        </div>
      </div>
    );
  });
  // end of beArr

  let cm = cmArr.map((x) => {
    return (
      <div className="skillIcon border border-primary d-flex flex-column text-center col-5 col-sm-3 col-lg-2 shadow">
        <div className="skillImg">
          <img className="skills" src={`${x.img}`} alt={x.name} />
        </div>

        <div className="iconText">
          <strong>{x.name}</strong>
        </div>
      </div>
    );
  });
  // end of cmArr

  return (
    <>
      {/* <h1>SKILLS</h1> */}
      <div className="container-fluid">
        <Swiper
          // install Swiper modules
          modules={[Navigation, Pagination, Scrollbar, A11y,EffectCreative,EffectFade,EffectCards, EffectCube, EffectCoverflow]}
          spaceBetween={50}
          slidesPerView={1}
          loop
          effect="cube"
          navigation
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log("slide change")}
        >
          <SwiperSlide>
            {/* <div className="row"> */}
              <strong>
                <h1 className="bg-primary text-white">Frontend Development</h1>
              </strong>
              <br />
              <div className="flex-container container-fluid flex-wrap ">
                {fe}
              </div>
            {/* </div> */}
          </SwiperSlide>
          <SwiperSlide>
            {/* <div className="row"> */}
              <h1 className="bg-primary text-white">Backend Development</h1>
              <br />
              <div className="flex-container container-fluid">{be}</div>
            {/* </div> */}
          </SwiperSlide>
          {/* <SwiperSlide>Slide 3</SwiperSlide>
      <SwiperSlide>Slide 4</SwiperSlide> */}
        </Swiper>
      </div>

      {/* end of Backend */}

      {/* <br />
      <br />
      <br />
      <br />
      <h1 className="bg-primary text-white">Creative Media</h1>
      <br />
      <section className="flex-container container-fluid">{cm}</section>
      <br />
      <br />
      <br />
      <br /> */}
    </>
  );
}
