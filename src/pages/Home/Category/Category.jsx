/* eslint-disable no-unused-vars */
import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";

import slider1 from "../../../assets/home/slide1.jpg";
import slider2 from "../../../assets/home/slide2.jpg";
import slider3 from "../../../assets/home/slide3.jpg";
import slider4 from "../../../assets/home/slide4.jpg";
import slider5 from "../../../assets/home/slide5.jpg";
import SectionTittle from "../../../components/SectionTittle/SectionTittle";

const Category = () => {
  return (
      <section>
          <SectionTittle subHeading={'From 11.00 AM TO 10.00 PM'}
             heading={'Order Online'}></SectionTittle>
          <Swiper
      slidesPerView={4}
      spaceBetween={30}
      centeredSlides={true}
      pagination={{
        clickable: true,
      }}
      modules={[Pagination]}
      className="mySwiper mb-24"
    >
      <SwiperSlide>
        <img src={slider1} alt="" />
        <h3 className="text-4xl text-center text-white  -mt-16">SALADS</h3>{" "}
      </SwiperSlide>
      <SwiperSlide>
        <img src={slider2} alt="" />
        <h3 className="text-4xl text-center text-white  -mt-16">PIZZAS</h3>{" "}
      </SwiperSlide>
      <SwiperSlide>
        <img src={slider3} alt="" />
        <h3 className="text-4xl text-center text-white  -mt-16">SOUPS</h3>{" "}
      </SwiperSlide>
      <SwiperSlide>
        <img src={slider4} alt="" />
        <h3 className="text-4xl text-center text-white -mt-16">DESERTS</h3>{" "}
      </SwiperSlide>
      <SwiperSlide>
        <img src={slider5} alt="" />
        <h3 className="text-4xl text-center text-white -mt-16">Salads</h3>{" "}
      </SwiperSlide>
    </Swiper>
    </section>
  );
};

export default Category;
