import banner from "/mobile_background.png";
import bannerDesktop from "/banner_desk_two.png";
import "./Banner.scss";
import React from "react";

const BannerComponent = () => {
  return (
    <section className="banner-container">
      <picture>
      <source className="item-img" srcSet={bannerDesktop} media="(min-width: 600px)" />
      <img className="item-img" src={banner} alt="MDN" />
      </picture>
      {/* <img
        className="item-img"
        src={banner}
        srcSet={`${bannerDesktop} 1024w, ${banner} 768w`}
        sizes="(min-width: 1024px) 1024px, 100vw"
        alt="Banner"
      /> */}
    </section>
  );
};

const Banner = React.memo(BannerComponent);

export default Banner;
