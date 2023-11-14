import React from "react";
import Banner from "../Banner/Banner";
import Order from "../Order/Order";
import Popular from "../../../components/Popular/Popular";
import About from "../About/About";
import Testimonials from "../Testimonials/Testimonials";
import { Helmet } from "react-helmet";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Bistro Shop | Home</title>
      </Helmet>
      <Banner></Banner>
      <Order></Order>
      <Popular></Popular>
      <About></About>
      <Testimonials></Testimonials>
    </div>
  );
};

export default Home;
