"use client";
import React from "react";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const services = [
    {
        id: 1,
        number: "01",
        title: "Commercial Design",
        category: "Commercial",
        image: "/assets//assets/images/resource/service5-1.jpg",
    },
    {
        id: 2,
        number: "02",
        title: "Landscape Architecture",
        category: "Landscape",
        image: "/assets//assets/images/resource/service5-2.jpg",
    },
    {
        id: 3,
        number: "03",
        title: "Renovation & Remodeling",
        category: "Renovation",
        image: "/assets//assets/images/resource/service5-3.jpg",
    },
    {
        id: 4,
        number: "04",
        title: "Commercial Design",
        category: "Commercial",
        image: "/assets//assets/images/resource/service5-1.jpg",
    },
    {
        id: 5,
        number: "05",
        title: "Landscape Architecture",
        category: "Landscape",
        image: "/assets//assets/images/resource/service5-2.jpg",
    },
];

const ServicesSectionSix = () => {
  return (
  <section className="services-section-six">
    <div className="outer-box">
      <div className="sec-title-box">
        <div className="sec-title-style-three">
          <h6 className="sub-title">// Architecture Services //</h6>
          <h2 className="title text-reveal-anim">Our Expertise in Architecture & <br/>Interior Design</h2>
        </div>
        <div className="btn-box">
          <div className="text">We combine creativity, precision, and functionality to deliver architectural designs that inspire &amp; endure.</div>
          <Link href="/page-services" className="theme-btn btn-style-one">
            <span className="btn-title"> Read More</span>
            <span className="icon">
              <i className="fa-light fa-arrow-right"></i>
            </span>
          </Link>
        </div>
      </div>
    </div>
    <div className="service-slide-wrapper position-relative">
        <div className="swiper-container service-active-h3">
            <Swiper className="swiper-wrapper"
                spaceBetween={30}
                slidesPerView={3}
                loop={true}
                breakpoints={{
                    0: { slidesPerView: 1 },
                    768: { slidesPerView: 2 },
                    1200: { slidesPerView: 3 },
                    1400: { slidesPerView: 4 },
                }}>
                <SwiperSlide className="service-block-six anim-fade-move swiper-slide" data-fade-from="right" data-delay="0.15">
                    <div className="inner-box">
                        <div className="number-box">
                            <div className="number">01</div>
                            <Link className="btn-link-arrow" href="/page-service-details">
                            <img src="/assets/images/icons/icon-arrow-up1.png" alt=""/>
                            </Link>
                        </div>
                        <div className="content-box text-center">
                            <h4 className="title"><Link href="/page-service-details">Commercial Design</Link></h4>
                            <div className="text">Commercial</div>
                        </div>
                        <div className="image-box">
                            <div className="image">
                            <Link href="/page-service-details">
                                <img src="/assets/images/resource/service5-1.jpg" alt=""/>
                                <img src="/assets/images/resource/service5-1.jpg" alt=""/>
                            </Link>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="service-block-six anim-fade-move swiper-slide" data-fade-from="right" data-delay="0.15">
                    <div className="inner-box">
                    <div className="number-box">
                        <div className="number">02</div>
                        <Link className="btn-link-arrow" href="/page-service-details">
                        <img src="/assets/images/icons/icon-arrow-up1.png" alt=""/>
                        </Link>
                    </div>
                    <div className="content-box text-center">
                        <h4 className="title"><Link href="/page-service-details">Landscape Architecture</Link></h4>
                        <div className="text">Landscape</div>
                    </div>
                    <div className="image-box">
                        <div className="image">
                        <Link href="/page-service-details">
                            <img src="/assets/images/resource/service5-2.jpg" alt=""/>
                            <img src="/assets/images/resource/service5-2.jpg" alt=""/>
                        </Link>
                        </div>
                    </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="service-block-six anim-fade-move swiper-slide" data-fade-from="right" data-delay="0.15">
                    <div className="inner-box">
                        <div className="number-box">
                            <div className="number">03</div>
                            <Link className="btn-link-arrow" href="/page-service-details">
                            <img src="/assets/images/icons/icon-arrow-up1.png" alt=""/>
                            </Link>
                        </div>
                        <div className="content-box text-center">
                            <h4 className="title"><Link href="/page-service-details">Renovation & Remodeling</Link></h4>
                            <div className="text">Renovation</div>
                        </div>
                        <div className="image-box">
                            <div className="image">
                            <Link href="/page-service-details">
                                <img src="/assets/images/resource/service5-3.jpg" alt=""/>
                                <img src="/assets/images/resource/service5-3.jpg" alt=""/>
                            </Link>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="service-block-six anim-fade-move swiper-slide" data-fade-from="right" data-delay="0.15">
                    <div className="inner-box">
                        <div className="number-box">
                            <div className="number">01</div>
                            <Link className="btn-link-arrow" href="/page-service-details">
                            <img src="/assets/images/icons/icon-arrow-up1.png" alt=""/>
                            </Link>
                        </div>
                        <div className="content-box text-center">
                            <h4 className="title"><Link href="/page-service-details">Commercial Design</Link></h4>
                            <div className="text">Commercial</div>
                        </div>
                        <div className="image-box">
                            <div className="image">
                            <Link href="/page-service-details">
                                <img src="/assets/images/resource/service5-1.jpg" alt=""/>
                                <img src="/assets/images/resource/service5-1.jpg" alt=""/>
                            </Link>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="service-block-six anim-fade-move swiper-slide" data-fade-from="right" data-delay="0.15">
                    <div className="inner-box">
                        <div className="number-box">
                            <div className="number">02</div>
                            <Link className="btn-link-arrow" href="/page-service-details">
                            <img src="/assets/images/icons/icon-arrow-up1.png" alt=""/>
                            </Link>
                        </div>
                        <div className="content-box text-center">
                            <h4 className="title"><Link href="/page-service-details">Landscape Architecture</Link></h4>
                            <div className="text">Landscape</div>
                        </div>
                        <div className="image-box">
                            <div className="image">
                            <Link href="/page-service-details">
                                <img src="/assets/images/resource/service5-2.jpg" alt=""/>
                                <img src="/assets/images/resource/service5-2.jpg" alt=""/>
                            </Link>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="service-block-six anim-fade-move swiper-slide" data-fade-from="right" data-delay="0.15">
                    <div className="inner-box">
                        <div className="number-box">
                            <div className="number">03</div>
                            <Link className="btn-link-arrow" href="/page-service-details">
                            <img src="/assets/images/icons/icon-arrow-up1.png" alt=""/>
                            </Link>
                        </div>
                        <div className="content-box text-center">
                            <h4 className="title"><Link href="/page-service-details">Renovation & Remodeling</Link></h4>
                            <div className="text">Renovation</div>
                        </div>
                        <div className="image-box">
                            <div className="image">
                                <Link href="/page-service-details">
                                    <img src="/assets/images/resource/service5-3.jpg" alt=""/>
                                    <img src="/assets/images/resource/service5-3.jpg" alt=""/>
                                </Link>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="service-block-six anim-fade-move swiper-slide" data-fade-from="right" data-delay="0.15">
                    <div className="inner-box">
                    <div className="number-box">
                        <div className="number">01</div>
                        <Link className="btn-link-arrow" href="/page-service-details">
                        <img src="/assets/images/icons/icon-arrow-up1.png" alt=""/>
                        </Link>
                    </div>
                    <div className="content-box text-center">
                        <h4 className="title"><Link href="/page-service-details">Commercial Design</Link></h4>
                        <div className="text">Commercial</div>
                    </div>
                    <div className="image-box">
                        <div className="image">
                        <Link href="/page-service-details">
                            <img src="/assets/images/resource/service5-1.jpg" alt=""/>
                            <img src="/assets/images/resource/service5-1.jpg" alt=""/>
                        </Link>
                        </div>
                    </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="service-block-six anim-fade-move swiper-slide" data-fade-from="right" data-delay="0.15">
                    <div className="inner-box">
                        <div className="number-box">
                            <div className="number">02</div>
                            <Link className="btn-link-arrow" href="/page-service-details">
                            <img src="/assets/images/icons/icon-arrow-up1.png" alt=""/>
                            </Link>
                        </div>
                        <div className="content-box text-center">
                            <h4 className="title"><Link href="/page-service-details">Landscape Architecture</Link></h4>
                            <div className="text">Landscape</div>
                        </div>
                        <div className="image-box">
                            <div className="image">
                            <Link href="/page-service-details">
                                <img src="/assets/images/resource/service5-2.jpg" alt=""/>
                                <img src="/assets/images/resource/service5-2.jpg" alt=""/>
                            </Link>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="service-block-six anim-fade-move swiper-slide" data-fade-from="right" data-delay="0.15">
                    <div className="inner-box">
                        <div className="number-box">
                            <div className="number">03</div>
                            <Link className="btn-link-arrow" href="/page-service-details">
                            <img src="/assets/images/icons/icon-arrow-up1.png" alt=""/>
                            </Link>
                        </div>
                        <div className="content-box text-center">
                            <h4 className="title"><Link href="/page-service-details">Renovation & Remodeling</Link></h4>
                            <div className="text">Renovation</div>
                        </div>
                        <div className="image-box">
                            <div className="image">
                                <Link href="/page-service-details">
                                    <img src="/assets/images/resource/service5-3.jpg" alt=""/>
                                    <img src="/assets/images/resource/service5-3.jpg" alt=""/>
                                </Link>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    </div>
  </section>
  );
};

export default ServicesSectionSix;