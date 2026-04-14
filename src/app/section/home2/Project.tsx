"use client";
import React from "react";
import Link from "next/link";

const projects = [
  {
    id: 1,
    title: "Modern Urban Residence",
    year: "2026",
    image: "/assets/images/resource/project2-1.jpg",
    categories: ["Residential", "Luxury"],
  },
  {
    id: 2,
    title: "Contemporary Office Tower",
    year: "2026",
    image: "/assets/images/resource/project2-2.jpg",
    categories: ["Civil", "Interior Design"],
  },
  {
    id: 3,
    title: "Innovative Community Housing",
    year: "2026",
    image: "/assets/images/resource/project-h2-1.jpg",
    categories: ["Modern", "House"],
  },
];

export default function ProjectsSectionTwo() {
  return (
    <section className="projects-section-two">
      <div className="auto-container">
        <div className="outer-box">
          <div className="row">
            <div className="sec-title-style-three white col-lg-5 scroll-to-fixed-parent">
              <div className="scroll-to-fixed-child">
                <h6 className="sub-title">// Our Projects //</h6>
                <h2 className="title">WORKS</h2>
                <div className="text">
                  Discover our portfolio of exceptional projects, impress, and elevate modern living spaces.
                </div>
                <Link href="/page-project" className="theme-btn btn-style-two">
                  <span className="btn-title">View All Projects</span>
                  <span className="icon">
                    <i className="fa-light fa-arrow-right"></i>
                  </span>
                </Link>
              </div>
            </div>
            <div className="col-lg-7 col-md-6">
              {projects.map((project, index) => (
                <div
                  key={project.id}
                  className="project-block-two anim-fade-move"
                  data-fade-from="left"
                  data-delay={0.15 * (index + 1)}>
                  <div className="inner-box">
                    <div className="image-box">
                      <figure className="image">
                        <Link href="/page-project-details">
                          <img
                            src={project.image}
                            alt={project.title}
                          />
                          <img
                            src={project.image}
                            alt={project.title}
                          />
                        </Link>
                      </figure>
                      <Link href="/page-project-details" className="view-btn">
                        <span>
                          View <br /> Details
                        </span>
                      </Link>
                    </div>
                    <div className="content-box">
                      <div className="title-box">
                        <h3 className="title">
                          <Link href="/page-project-details">
                            {project.title}
                          </Link>
                        </h3>
                        <div className="year-info">{project.year}</div>
                      </div>
                      <div className="categories-list">
                        {project.categories.map((cat, i) => (
                          <Link
                            key={i}
                            href="/page-project-details"
                            className="item">
                            {cat}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}