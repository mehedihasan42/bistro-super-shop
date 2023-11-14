import React from "react";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import featuredImage from "../../../assets/home/featured.jpg";
import '../About/About.css'

const About = () => {
  return (
    <div className="about-section">
      <SectionTitle
        subHeading={"---Check it out---"}
        heading={"FROM OUR MENU"}
     ></SectionTitle>
      <div className="flex items-center mt-10 w-3/4 mx-auto text-[#FFFFFF] bg-slate-800 bg-opacity-60 p-8">
      <div>
        <img src={featuredImage} style={{width:'500px', height:'270px'}} alt="" />
      </div>
      <div className="ml-16 w-3/4 space-y-2">
        <p>March 20, 2023</p>
        <h3 className="text-xl">Where can I get some?</h3>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia
          mollitia modi sint praesentium veritatis, repudiandae quos harum
          aperiam a debitis tempore, assumenda est vero. Ipsa amet officia
          itaque eligendi velit!
        </p>
        <button className="btn btn-outline text-white border-b-4 border-white">Read More</button>
      </div>
      </div>
    </div>
  );
};

export default About;
