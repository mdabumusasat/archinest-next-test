"use client";
import React from "react";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const slides = [
  { id: 1, image: "/assets/images/resource/banner-h2-1.jpg" },
  { id: 2, image: "/assets/images/resource/banner-h2-1.jpg" },
];

export default function BannerHomeTwo() {
  return (
    <section className="banner-section-home-two">
      <div className="outer-box">
        <div className="anim-icon">
          <img
            src="/assets/images/icons/banner-h2-2.png"
            alt="icon"
          />
        </div>
        <div className="content-box">
          <h1 className="title text-reveal-anim">
            Transforming Ideas Into Inspiring Architectural Spaces
          </h1>
          <div className="text">
            Transforming innovative ideas into inspiring architectural spaces
            that blend creativity, functionality, and timeless elegance
            seamlessly.
          </div>
          <Link href="/page-services" className="banner-btn">
            <i className="fa-light fa-arrow-right"></i>
            <span>Our Services</span>
          </Link>
          <div className="anim-icon-two">
            <img
              src="/assets/images/icons/banner-h2-1.png"
              alt="icon"
            />
          </div>
        </div>
      </div>
      <div className="outer-box-two">
        <div className="suite-slide-wrapper position-relative">
          <Swiper
            modules={[Navigation]}
            loop={true}
            navigation={{
              nextEl: ".slider-next",
              prevEl: ".slider-prev",
            }}
            className="banner-active-home-two">
            {slides.map((slide) => (
              <SwiperSlide key={slide.id}>
                <div className="banner-box-two">
                  <div className="inner-box">
                    <figure className="image">
                      <img
                        src={slide.image}
                        alt="banner"
                      />
                    </figure>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="arrow-box">
            <button className="slider-prev">
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
}