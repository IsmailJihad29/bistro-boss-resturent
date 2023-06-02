// eslint-disable-next-line no-unused-vars
import React from "react";
import Banner from "../Banner/Banner";
import Category from "../Category/Category";
import PopulerMenu from "../PopulerMenu/PopulerMenu";
import Featured from "../Featured/Featured";
import Testimonial from "../Testimonial/Testimonial";
import OfferedMenu from "../OfferedMenu/OfferedMenu";
import MiddleBanner from "../MiddleBanner/MiddleBanner";
import { Helmet } from "react-helmet-async";


const Home = () => {
  return (
    <div>
       <Helmet>
               <title> Bistro Boss | Home</title>
            </Helmet>
          <Banner />
      <Category />
      <MiddleBanner/>
      <PopulerMenu />
      <OfferedMenu/>
      <Featured />
      <Testimonial />
      
    </div>
  );
};

export default Home;
