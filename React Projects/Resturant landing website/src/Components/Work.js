import React from "react";
import PickMeals from "../Assets/pick-meals-image.png";
import ChooseMeals from "../Assets/choose-image.png";
import DeliveryMeals from "../Assets/delivery-image.png";

const Work = () => {
  const workInfoData = [
    {
      image: PickMeals,
      title: "Pick Meals",
      text: "Many naysayers will tell you that the food and recipe niche is oversaturated with online content.",
    },
    {
      image: ChooseMeals,
      title: "Choose How Often",
      text: "FoodData Central is managed by the Agricultural Research Service's Beltsville Human Nutrition Research Center and hosted by the National Agricultural Library.",
    },
    {
      image: DeliveryMeals,
      title: "Fast Deliveries",
      text: " While it’s true that many food and recipe websites exist on the internet, you shouldn’t let that stop you from following your dream",
    },
  ];
  return (
    <div className="work-section-wrapper">
      <div className="work-section-top">
        <p className="primary-subheading">Work</p>
        <h1 className="primary-heading">How It Works</h1>
        <p className="primary-text">
           While it’ s true that many food and recipe websites exist on the internet, you shouldn’ t
           let that stop you from following your dream.
        </p>
      </div>
      <div className="work-section-bottom">
        {workInfoData.map((data) => (
          <div className="work-section-info" key={data.title}>
            <div className="info-boxes-img-container">
              <img src={data.image} alt="" />
            </div>
            <h2>{data.title}</h2>
            <p>{data.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Work;
