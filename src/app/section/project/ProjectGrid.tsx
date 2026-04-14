"use client";
import React from "react";
import Link from "next/link";

export default function ProjectsSection() {
  const projects = [
    {
      img: "/assets/images/resource/project1-1.jpg",
      title: "3D Visualization",
      categories: ["Civil", "House"],
    },
    {
      img: "/assets/images/resource/project1-2.jpg",
      title: "3D Visualization",
      categories: ["Civil", "House"],
    },
    {
      img: "/assets/images/resource/project1-3.jpg",
      title: "3D Visualization",
      categories: ["Civil", "House"],
    },
    {
      img: "/assets/images/resource/project1-4.jpg",
      title: "3D Visualization",
      categories: ["Civil", "House"],
    },
  ];

  return (
    <section className="projects-section">
      <div className="auto-container">
        <div className="row g-24">
          {projects.map((project, index) => (
            <div key={index} className="project-block col-lg-6 wow zoomIn">
              <div className="inner-block">
                <div className="image-box">
                  <figure className="image">
                    <Link href="/page-project-details">
                      <img src={project.img} alt={project.title} />
                    </Link>
                  </figure>
                </div>
                <div className="catagories-box">
                  {project.categories.map((cat, i) => (
                    <div key={i} className="catagory">
                      <Link href="/page-project-details">{cat}</Link>
                    </div>
                  ))}
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
                      From layouts to finishes, meticulously refine every aspect
                      achieve design execution.
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
}