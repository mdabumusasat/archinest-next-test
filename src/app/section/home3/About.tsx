"use client";
import React from "react";
import Link from "next/link";
import CounterUp from "../../components/elements/CounterUp";

const counters = [
  {
    value: 25,
  },
];

const AboutSectionHomeThree = () => {
  return (
    <section className="about-section-home-three">
      <div className="auto-container">
        <div className="row">
          <div className="col-xl-7">
            <div className="sec-title-style-three">
              <h6 className="sub-title">// About Our Company //</h6>
              <h2 className="title text-reveal-anim">
                Shaping Meaningful Spaces with Creativity, <br />
                Innovation, and Timeless Architectural <br />
                Excellence
              </h2>
            </div>
            <div className="content-box">
              <div className="count-outer">
                <div className="count-box">
                  <span
                    className="count-text">
                    <CounterUp end={counters[0].value} />
                  </span>
                  <sup>+</sup>
                </div>
                <h4 className="count-text">Years Experience</h4>
              </div>
              <div className="content">
                <div className="text">
                  We design meaningful spaces that blend creativity,
                  innovation, & timeless architectural excellence,
                  creating environments that inspire and endure.
                </div>
                <Link href="/page-about" className="theme-btn btn-style-one">
                  <span className="btn-title">See More About Us</span>
                  <span className="icon">
                    <i className="fa-light fa-arrow-right"></i>
                  </span>
                </Link>
              </div>
            </div>
          </div>
          <div className="col-xl-4 offset-lg-1 d-none d-xl-block">
            <figure className="image">
              <img
                src="/assets/images/resource/about-4.jpg"
                alt="About"
              />
            </figure>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSectionHomeThree;