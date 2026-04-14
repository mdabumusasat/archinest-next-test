"use client";
import React, { useState } from "react";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const services = [
  {
    title: "Design Without Borders",
    desc: "Creating timeless spaces that connect people across nations, beyond cultural and geographical limits.",
    bg: "/assets/images/resource/service4-bg1.jpg",
  },
  {
    title: "International Expertise",
    desc: "Offering deep experience in architecture tailored to international standards and cultural contexts.",
    bg: "/assets/images/resource/service4-bg2.jpg",
  },
  {
    title: "Architecture Across Borders",
    desc: "Bridging cultures and communities through iconic architectural interior design projects.",
    bg: "/assets/images/resource/service4-bg1.jpg",
  },
  {
    title: "Global Vision",
    desc: "Delivering innovative architectural solutions with a vision that transcends boundaries and cultures.",
    bg: "/assets/images/resource/service4-bg2.jpg",
  },
  {
    title: "Design Without Borders",
    desc: "Creating timeless spaces that connect people across nations, beyond cultural and geographical limits.",
    bg: "/assets/images/resource/service4-bg1.jpg",
  },
  {
    title: "International Expertise",
    desc: "Offering deep experience in architecture tailored to international standards and cultural contexts.",
    bg: "/assets/images/resource/service4-bg2.jpg",
  },
];

export default function ServiceSectionFour() {
  const defaultBg = "/assets/images/resource/service4-bg1.jpg";
  const [bgImage, setBgImage] = useState(
    "/assets/images/resource/service4-bg1.jpg"
  );

  return (
    <section className="service-section-four pt-0 pb-0">
      <div
        className="outer-box"
        style={{
          backgroundImage: `url(${bgImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          transition: "all 0.5s ease",
        }}
      >
        <div className="auto-container">
          <div className="row">
            <div className="sec-title-style-two white">
              <h6 className="sub-title">// Global Practice //</h6>
              <h2 className="title text-reveal-anim">
                Designing Tomorrow’s Skylines, Creating Sustainable Cities for
                Generations to Come.
              </h2>
            </div>
          </div>
        </div>

        <Swiper
          modules={[Navigation]}
          navigation={{
            nextEl: ".slider-next",
            prevEl: ".slider-prev",
          }}
          spaceBetween={30}
          breakpoints={{
            0: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1200: { slidesPerView: 3 },
            1400: { slidesPerView: 4 },
          }}
          className="service-four-slider">
          {services.map((item, index) => (
            <SwiperSlide key={index}>
              <div
                className="service-block-four"
                onMouseEnter={() => setBgImage(item.bg)}
                onMouseLeave={() => setBgImage(defaultBg)}>
                <div className="inner-box">
                  <div className="content">
                    <h4 className="title">
                      <Link href="/page-service-details">
                        International Expertise
                      </Link>
                    </h4>
                    <div className="text">
                      Offering deep experience in architecture tailored to international
                      standards and cultural contexts.
                    </div>
                  </div>
                  <div className="overlay-content">
                    <h4 className="title">
                      <Link href="/page-service-details">
                        International Expertise
                      </Link>
                    </h4>
                    <div className="text">
                      Bridging cultures and communities through iconic architectural interior
                      design projects through worldwide collaborations.
                    </div>
                    <ul className="list-info">
                      <li>
                        <img
                          className="icon"
                          src="/assets/images/icons/icon1.png"
                          alt=""
                        />
                        Global Reach, Timeless Design Excellence
                      </li>
                      <li>
                        <img
                          className="icon"
                          src="/assets/images/icons/icon1.png"
                          alt=""
                        />
                        Global Practice, Local Expertise
                      </li>
                      <li>
                        <img
                          className="icon"
                          src="/assets/images/icons/icon1.png"
                          alt=""
                        />
                        Designing Landmark Projects Worldwide
                      </li>
                    </ul>
                    <div className="btn-box">
                      <Link
                        href="/page-service-details"
                        className="theme-btn btn-style-two">
                        <span className="btn-title">Read More</span>
                        <i className="icon fa-light fa-arrow-right"></i>
                      </Link>
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
    </section>
  );
}