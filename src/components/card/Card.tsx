import "./Card.scss";
import toroid from "/SuperToroid-Blue-Glossy.png";
import cube from "/RoundCube-Orange-Glossy.png";
import backgroundOne from "/business-site.jpg";
import backgroundTwo from "/code.jpg";
import backgroundThree from "/team.jpg";
import React from "react";

const Card = () => {
  return (
    <section>
      <h2 className="title-cards">Services:</h2>
      <div className="image-toroid">
        <img className="image-toroid-img" src={toroid} alt="" />
      </div>

      <div className="cards-container">
        <div className="card-container">
          <span className="card-subtitle">Bulid</span>
          <h2 className="card-title">Landing pages</h2>
          <img src={backgroundOne} alt="" className="principale-image" />
        </div>
        <div className="card-container">
          <span className="card-subtitle">Bulid</span>
          <h2 className="card-title">Profile sites</h2>
          <img src={backgroundTwo} alt="" className="principale-image" />
        </div>
        <div className="card-container">
          <span className="card-subtitle">Bulid</span>
          <h2 className="card-title">Business sites</h2>
          <img src={backgroundThree} alt="" className="principale-image" />
        </div>
      </div>
      <div className="image-cube">
        <img className="image-cube-img" src={cube} alt="" />
      </div>
    </section>
  );
};

export default Card;
