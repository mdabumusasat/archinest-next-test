"use client";

import React from "react";
import Link from "next/link";

const projects = [
  {
    id: 1,
    image: "/assets/images/resource/project1-1.jpg",
    title: "3D Visualization",
  },
  {
    id: 2,
    image: "/assets/images/resource/project1-2.jpg",
    title: "3D Visualization",
  },
  {
    id: 3,
    image: "/assets/images/resource/project1-3.jpg",
    title: "3D Visualization",
  },
  {
    id: 4,
    image: "/assets/images/resource/project1-4.jpg",
    title: "3D Visualization",
  },
];

const ProjectsSection = () => {
  return (
    <section className="projects-section">
      <div className="auto-container">
        <div className="sec-title-box">
          <div className="sec-title-style-three">
            <h6 className="sub-title">// Our Projects //</h6>
            <h2 className="title text-reveal-anim">
              Projects That Define <br /> Our Expertise
            </h2>
          </div>
          <div className="sec-right-box">
            <div className="text">
              Discover our portfolio of exceptional projects, impress, and
              elevate modern living spaces.
            </div>
            <Link href="/page-project" className="theme-btn btn-style-one">
              <span className="btn-title">View All Projects</span>
              <span className="icon">
                <i className="fa-light fa-arrow-right"></i>
              </span>
            </Link>
          </div>
        </div>
        <div className="row g-24">
          {projects.map((project) => (
            <div key={project.id} className="project-block col-lg-6 wow zoomIn">
              <div className="inner-block">
                <div className="image-box">
                  <figure className="image">
                    <Link href="/page-project-details">
                      <img src={project.image} alt={project.title} />
                    </Link>
                  </figure>
                </div>
                <div className="catagories-box">
                  <div className="catagory">
                    <Link href="/page-project-details">Civil</Link>
                  </div>
                  <div className="catagory">
                    <Link href="/page-project-details">House</Link>
                  </div>
                </div>
                <div className="content-box">
                  <div className="inner-box">
                    <div className="title-box">
                      <h4 className="title">
                        <Link href="/page-project-details">
                          {project.title}
                        </Link>
                      </h4>
                      <Link href="/page-project-details">
                        <i className="icon fa-light fa-arrow-right"></i>
                      </Link>
                    </div>
                    <div className="text">
                      From layouts to finishes, meticulously refine every
                      aspect achieve design execution.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;