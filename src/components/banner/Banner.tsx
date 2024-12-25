import profile from "/profile.webp";
import banner from "/background1.webp";
import money from "/icons.png";
import "./Banner.scss";
import React from "react";

const BannerComponent = () => {
  return (
    <section className="banner-container">
      <div className="item">
        <img className="item-img" src={banner} alt="" />
        <img className="item-second-image" src={profile} alt="" />
        <img className="item-third-image" src={money} alt="" />
        <div className="banner-content">
          <p className="banner-name">Atef Chelaghma</p>
          <h1 className="banner-profission">Web Developer</h1>
          <p className="banner-title">Crafting Exceptional Web Experiences</p>
        </div>
      </div>
    </section>
  );
};

const Banner = React.memo(BannerComponent);

export default Banner;
