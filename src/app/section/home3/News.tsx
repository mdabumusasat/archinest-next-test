"use client";
import React from "react";
import Link from "next/link";

const newsData = [
  {
    title: "Blending Tradition With Modern Architecture",
    text: "Understand how modern design come together create timeless,",
    image: "/assets/images/resource/news1-1.jpg",
  },
  {
    title: "Modern Interior Design Trends 2026",
    text: "Explore the latest interior innovations blending for modern living.",
    image: "/assets/images/resource/news1-2.jpg",
  },
  {
    title: "Designing Spaces That Inspire Productivity",
    text: "Learn how architecture and interior design impact workplace efficiency,",
    image: "/assets/images/resource/news1-3.jpg",
  },
];

const NewsSection = () => {
  return (
    <section className="news-section-four">
      <div className="container">
        <div className="sec-title-box">
          <div className="sec-title-style-three text-left">
            <h6 className="sub-title">// Our Latest Articles ///</h6>
            <h2 className="title text-reveal-anim">
              Latest Updates From The World <br />
              of Architecture
            </h2>
          </div>
          <div className="sec-right-box">
            <div className="text">
              Stay updated with the latest architecture trends, & creative
              insights from industry experts worldwide.
            </div>
            <Link href="/news-grid" className="theme-btn btn-style-one">
              <span className="btn-title"> Read More</span>
              <span className="icon">
                <i className="fa-light fa-arrow-right"></i>
              </span>
            </Link>
          </div>
        </div>
        <div className="row g-24">
          {newsData.map((item, index) => (
            <div
              className="news-block-four col-xl-4 col-lg-6 col-md-6"
              key={index}>
              <div className="inner-block">
                <div className="image-box">
                  <div className="inner-box">
                    <figure className="image">
                      <Link href="/news-details">
                        <img src={item.image} alt={item.title} />
                        <img src={item.image} alt={item.title} />
                      </Link>
                    </figure>
                  </div>
                </div>
                <div className="content-box">
                  <div className="inner-box">
                    <h4 className="title">
                      <Link href="/news-details">{item.title}</Link>
                    </h4>
                    <div className="text">{item.text}</div>
                  </div>
                  <Link href="/news-details" className="read-more">
                    Read More
                    <i className="icon fa fa-solid fa-arrow-right"></i>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewsSection;