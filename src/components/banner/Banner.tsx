import banner from "/mobile_background.png";
import "./Banner.scss";
import React from "react";

const BannerComponent = () => {
  return (
    <section className="banner-container">
      <img className="item-img" src={banner} alt="" />
    </section>
  );
};

const Banner = React.memo(BannerComponent);

export default Banner;
