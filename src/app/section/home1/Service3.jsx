"use client";
import React, { useState } from "react";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const ServiceSectionTwo = () => {
  const [bgImage, setBgImage] = useState(
    "/assets/images/resource/service2-bg1.jpg"
  );
  const defaultBg = "/assets/images/resource/service2-bg1.jpg";
  const services = [
    {
      title: "Personalized Designs",
      icon: "/assets/images/icons/theme-icon1.png",
      bg: "/assets/images/resource/service2-bg1.jpg",
    },
    {
      title: "Innovative Concepts",
      icon: "/assets/images/icons/theme-icon2.png",
      bg: "/assets/images/resource/service2-bg2.jpg",
    },
    {
      title: "3D Visualization",
      icon: "/assets/images/icons/theme-icon3.png",
      bg: "/assets/images/resource/service2-bg1.jpg",
    },
    {
      title: "Smart Space Planning",
      icon: "/assets/images/icons/theme-icon4.png",
      bg: "/assets/images/resource/service2-bg2.jpg",
    },
    {
      title: "Personalized Designs",
      icon: "/assets/images/icons/theme-icon1.png",
      bg: "/assets/images/resource/service2-bg1.jpg",
    },
    {
      title: "Innovative Concepts",
      icon: "/assets/images/icons/theme-icon2.png",
      bg: "/assets/images/resource/service2-bg2.jpg",
    },
  ];

  return (
    <section className="service-section-two pt-0 pb-0">
      <div
        className="outer-box"
        style={{
          backgroundImage: `url(${bgImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          transition: "all 0.5s ease",
        }}>
        <div className="service-two-slider">
          <Swiper
            modules={[Navigation]}
            spaceBetween={0}
            slidesPerView={1}
            loop={true}
            navigation={{
              nextEl: ".slider-next",
              prevEl: ".slider-prev",
            }}
            breakpoints={{
              768: { slidesPerView: 2 },
              1200: { slidesPerView: 3 },
              1400: { slidesPerView: 4 },
            }}>
            {services.map((item, index) => (
              <SwiperSlide key={index}>
                <div
                  className="service-block-two"
                  onMouseEnter={() => setBgImage(item.bg)}
                  onMouseLeave={() => setBgImage(defaultBg)}>
                  <div className="inner-box">
                    <div className="content">
                      <div className="icon-box">
                        <img src={item.icon} alt={item.title} />
                      </div>
                      <h4 className="title">
                        <Link href="/page-service-details">
                          {item.title}
                        </Link>
                      </h4>
                    </div>
                    <div className="overlay-content">
                      <div className="icon-box">
                        <img className="icon" src={item.icon} alt={item.title} />
                      </div>
                      <h4 className="title">
                        <Link href="/page-service-details">
                          {item.title}
                        </Link>
                      </h4>
                      <div className="text">
                        Tailored applications built to meet your business scalability.
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="arrow-box">
            <button className="slider-prev mr-10">
              <i className="fa-regular fa-arrow-left"></i>
            </button>
            <button className="slider-next">
              <i className="fa-regular fa-arrow-right"></i>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceSectionTwo;