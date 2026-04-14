"use client";

import React from "react";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const projects = [
  {
    img: "/assets/images/resource/project3-1.jpg",
    title: "3D Visualization",
    categories: ["Residential", "Luxury"],
    desc: "From layouts to finishes, meticulously refine every aspect achieve design execution.",
  },
  {
    img: "/assets/images/resource/project3-2.jpg",
    title: "3D Visualization",
    categories: ["Residential", "Luxury"],
    desc: "From layouts to finishes, meticulously refine every aspect achieve design execution.",
  },
  {
    img: "/assets/images/resource/project3-3.jpg",
    title: "3D Visualization",
    categories: ["Residential", "Luxury"],
    desc: "From layouts to finishes, meticulously refine every aspect achieve design execution.",
  },
  {
    img: "/assets/images/resource/project3-1.jpg",
    title: "3D Visualization",
    categories: ["Residential", "Luxury"],
    desc: "From layouts to finishes, meticulously refine every aspect achieve design execution.",
  },
  {
    img: "/assets/images/resource/project3-2.jpg",
    title: "3D Visualization",
    categories: ["Residential", "Luxury"],
    desc: "From layouts to finishes, meticulously refine every aspect achieve design execution.",
  },
];

export default function ProjectsSectionThree() {
  return (
    <section className="projects-section-three position-relative">
      <div className="container">
        <div className="sec-title-box">
          <div className="sec-title-style-three">
            <h6 className="sub-title">// Our Projects //</h6>
            <h2 className="title text-reveal-anim">
              Showcase of Our Iconic <br /> Architectural Works
            </h2>
          </div>
          <div className="btn-box">
            <div className="text">
              Discover our portfolio of exceptional projects, impress,
              <br /> and elevate modern living spaces.
            </div>
            <Link href="/page-project" className="theme-btn btn-style-one">
              <span className="btn-title">View All Projects</span>
              <span className="icon">
                <i className="fa-light fa-arrow-right"></i>
              </span>
            </Link>
          </div>
        </div>
        <div className="outer-box">
          <Swiper
            modules={[Navigation]}
            navigation={{
              nextEl: ".custom-next",
              prevEl: ".custom-prev",
            }}
            centeredSlides={true}
            loop={true}
            spaceBetween={30}
            slidesPerView={"auto"}
            className="project-swiper-container">
            {projects.map((item, index) => (
              <SwiperSlide key={index} className="project-slide">
                <div className="project-block-three">
                  <div className="inner-block">
                    <div className="image-box">
                      <figure className="image">
                        <Link href="/page-project-details">
                          <img src={item.img} alt={item.title} />
                        </Link>
                      </figure>
                    </div>
                    <div className="content-box">
                      <div className="inner-box">
                        <div className="title-box">
                          <div className="catagories-box">
                            {item.categories.map((cat, i) => (
                              <div key={i} className="catagory">
                                <Link href="/page-project-details">{cat}</Link>
                              </div>
                            ))}
                          </div>
                          <h4 className="title">
                            <Link href="/page-project-details">
                              {item.title}
                            </Link>
                          </h4>
                        </div>
                        <div className="bottom-box">
                          <div className="text">{item.desc}</div>
                          <Link
                            href="/page-project-details"
                            className="btn-link-arrow">
                            <i className="icon fa-light fa-arrow-right"></i>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="swiper-button-prev custom-prev">
            <i className="far fa-arrow-left"></i>
          </div>
          <div className="swiper-button-next custom-next">
            <i className="far fa-arrow-right"></i>
          </div>
        </div>

      </div>
    </section>
  );
}