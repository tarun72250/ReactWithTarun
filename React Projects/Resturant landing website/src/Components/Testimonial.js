import React from "react";
//import ProfilePic from "../Assets/your_image.png";
import { AiFillStar } from "react-icons/ai";

const Testimonial = () => {
  return (
    <div className="work-section-wrapper">
      <div className="work-section-top">
        <p className="primary-subheading">Testimonial</p>
        <h1 className="primary-heading">What They Are Saying</h1>
        <p className="primary-text">
         There is no denying that the food industry is and always will be booming.That is why you need to take strategic action to stay ahead of your competitors, focusing on everything from website traffic to brand awareness.To solidify your place as a leader in the food industry, the content you publish matters.
        </p>
      </div>
      <div className="testimonial-section-bottom">
        {/* <img src={ProfilePic} alt="" /> */}
        <p>
        Food websites are everywhere, covering a wide range of food - related topics.From food delivery websites to recipe blogs, food is a topic that everyone can relate to.Although many food websites focus on a service(i.e.groceries or take - out), there are plenty of food websites that rely on the power of exceptional content and quality photography.After all, "you eat with your eyes first."
        </p>
        <div className="testimonials-stars-container">
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
        </div>
        <h2>Tarun Rathore </h2>
      </div>
    </div>
  );
};

export default Testimonial;
