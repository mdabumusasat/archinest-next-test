"use client";
import React, { useState } from "react"; 
import Link from "next/link";

const faqs = [
  {
    id: 1,
    question: "What types of architecture and design services do you offer?",
    answer:
      "Yes, we specialize in both residential and commercial design solutions, creating tailored spaces that meet functional, aesthetic, and client needs.",
  },
  {
    id: 2,
    question: "How long does it typically take to complete a project?",
    answer:
      "Yes, we specialize in both residential and commercial design solutions, creating tailored spaces that meet functional, aesthetic, and client needs.",
  },
  {
    id: 3,
    question: "Do you provide both residential and commercial design solutions?",
    answer:
      "Yes, we specialize in both residential and commercial design solutions, creating tailored spaces that meet functional, aesthetic, and client needs.",
  },
  {
    id: 4,
    question: "Can you work with my existing contractor or builder?",
    answer:
      "Yes, we specialize in both residential and commercial design solutions, creating tailored spaces that meet functional, aesthetic, and client needs.",
  },
  {
    id: 5,
    question: "Do you handle construction as well as design?",
    answer:
      "Yes, we specialize in both residential and commercial design solutions, creating tailored spaces that meet functional, aesthetic, and client needs.",
  },
];

export default function FaqSectionTwo() {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="faq-section-home-two">
      <div className="auto-container">
        <div className="sec-title-box gap-4 gap-xl-0">
          <div className="sec-title-style-three">
            <h6 className="sub-title">// // FAQ //</h6>
            <h2 className="title text-reveal-anim">
              Everything You Need To Know About Working With Us
            </h2>
          </div>
          <div className="sec-right-box">
            <div className="text">
              Get to know the visionary designers creating inspiring spaces
              with innovation and passion.
            </div>
            <Link href="/page-faq" className="theme-btn btn-style-one">
              <span className="btn-title">Read More</span>
              <span className="icon">
                <i className="fa-light fa-arrow-right"></i>
              </span>
            </Link>
          </div>
        </div>
        <div className="row clearfix">
          <div className="image-column col-xl-4 col-lg-4">
            <figure className="image">
              <img src="/assets/images/resource/faq-h2-1.jpg" alt="FAQ" />
            </figure>
          </div>
          <div className="column col-xl-7 col-lg-8 offset-xl-1">
            <ul className="accordion-box">
              {faqs.map((faq, index) => (
                <li
                  key={faq.id}
                  className={`accordion block ${
                    activeIndex === index ? "active-block" : ""
                  }`}>
                  <div
                    className={`acc-btn ${
                      activeIndex === index ? "active" : ""
                    }`}
                    onClick={() => toggleAccordion(index)}
                    style={{ cursor: "pointer" }}>
                    {faq.question}
                    <div className="icon">
                      <img src="/assets/images/icons/faq-h2-1.svg" alt="icon" />
                    </div>
                  </div>
                  <div
                    className={`acc-content ${
                      activeIndex === index ? "current" : ""
                    }`}
                    style={{
                      display: activeIndex === index ? "block" : "none",
                    }}>
                    <div className="content">
                      <div className="text">{faq.answer}</div>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}