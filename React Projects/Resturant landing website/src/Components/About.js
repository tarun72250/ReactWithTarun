import React from "react";
import AboutBackground from "../Assets/about-background.png";
import AboutBackgroundImage from "../Assets/about-background-image.png";
import { BsFillPlayCircleFill } from "react-icons/bs";
//  import { Link } from "react-router-dom";


const About = () => {
  return (
    <div className="about-section-container">
               {/* <Link to="/home"></Link> */}

      <div className="about-background-image-container">
        <img src={AboutBackground} alt="" />
      </div>
      <div className="about-section-image-container">
        <img src={AboutBackgroundImage} alt="" />
      </div>
      <div className="about-section-text-container">
        <p className="primary-subheading">About</p>
        <h1 className="primary-heading">
          Food Is An Important Part Of A Balanced Diet
        </h1>
        <p className="primary-text">
          Step into the culinary cosmos of our sleek restaurant website design!
            Clean lines, bold typography, and vibrant visuals harmonize to entice visitors, inviting them on a visual feast through the world of gastronomy.
        </p>
        <p className="primary-text">
         Seamless navigation merges with intuitive user experience, ensuring effortless exploration of menus and reservation options.Delight in the fusion of sophistication and simplicity, where every pixel celebrates the artistry of food and design.Non tincidunt magna non et elit.Dolor turpis molestie dui magnis
          facilisis at fringilla quam.
        </p>
        <div className="about-buttons-container">
          <button className="secondary-button">Learn More</button>
          <button className="watch-video-button">
            <BsFillPlayCircleFill /> Watch Video
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
