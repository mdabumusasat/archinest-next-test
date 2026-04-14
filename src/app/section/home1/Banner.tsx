"use client";
import React from "react";
import Link from "next/link";

const BannerSection: React.FC = (): JSX.Element => {
  return (
  <section className="banner-section-one">
    <div className="banner-slider">
      <div className="banner-slide">
        <div className="outer-box">
          <div className="content-box">
            <div className="sec-title-box">
              <div className="sec-title-style-three">
                <h1 className="title text-reveal-anim">Elevating Everyday Living Through Inspired Design</h1>
              </div>
              <div className="btn-box">
                <div className="text">We create timeless spaces blending beauty, functionality, & innovation for exceptional living.</div>
                <Link href="/page-services" className="theme-btn btn-style-one">
                  <span className="btn-title">Our Services</span>
                  <span className="icon">
                    <i className="fa-light fa-arrow-right"></i>
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  );
};

export default BannerSection;