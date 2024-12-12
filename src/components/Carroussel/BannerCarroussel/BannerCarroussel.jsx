import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import bannersData from "../../../services/bannersData"; 
import './bannerCarroussel.scss';

const BannerCarroussel = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 321);


  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 321);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const settingsShowBannerCarroussel = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    lazyLoad: true,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 3000,
    cssEase: "ease-in-out",
  };

  return (
    <section className="carroussel" aria-label="Carrossel de banners">
      <Slider {...settingsShowBannerCarroussel}>
        {bannersData.map((image, index) => {
          const imageSrc = isMobile ? image.mobileSrc : image.desktopSrc;
          return (
            <figure key={index} className="carroussel__container">
              <img
                src={imageSrc}
                alt={image.description}
                className="carroussel__image"
              />
              <figcaption className="visually-hidden">{image.description}</figcaption>
            </figure>
          );
        })}
      </Slider>
    </section>
  );
};

export default BannerCarroussel;
