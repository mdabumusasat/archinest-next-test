"use client";

import React from "react";
import Link from "next/link";

const teamMembers = [
  {
    id: 1,
    name: "Robert Fox",
    role: "Marketing Coordinator",
    image: "/assets/images/resource/team1-1.jpg",
  },
  {
    id: 2,
    name: "Robert Fox",
    role: "Marketing Coordinator",
    image: "/assets/images/resource/team1-2.jpg",
  },
  {
    id: 3,
    name: "Robert Fox",
    role: "Marketing Coordinator",
    image: "/assets/images/resource/team1-3.jpg",
  },
  {
    id: 4,
    name: "Robert Fox",
    role: "Marketing Coordinator",
    image: "/assets/images/resource/team1-4.jpg",
  },
];

export default function TeamSection() {
  return (
    <section className="teams-section">
      <div className="auto-container">
        <div className="sec-title-box">
          <div className="sec-title-style-three">
            <h6 className="sub-title">// Our Professionals //</h6>
            <h2 className="title text-reveal-anim">
              Meet The Designers Who <br />
              Inspire Change
            </h2>
          </div>
          <div className="sec-right-box">
            <div className="text">
              Get to know the visionary designers creating inspiring spaces with
              innovation and passion.
            </div>
            <Link href="/page-team" className="theme-btn btn-style-one">
              <span className="btn-title">View all Member</span>
              <span className="icon">
                <i className="fa-light fa-arrow-right"></i>
              </span>
            </Link>
          </div>
        </div>
        {/* Team Members */}
        <div className="row">
          {teamMembers.map((member) => (
            <div
              key={member.id}
              className="team-block col-xl-3 col-sm-6">
              <div className="inner-block">
                <div className="image-box">
                  <figure className="image">
                    <Link href="/page-team-details">
                      <img
                        src={member.image}
                        alt={member.name}
                      />
                    </Link>
                  </figure>
                </div>
                <div className="info-box">
                  <h5 className="name">
                    <Link href="/page-team-details">{member.name}</Link>
                  </h5>
                  <div className="designation">{member.role}</div>
                </div>
                <div className="social-links">
                  <Link href="#"><i className="fa-brands fa-facebook"></i></Link>
                  <Link href="#"><i className="fa-brands fa-twitter"></i></Link>
                  <Link href="#"><i className="fa-brands fa-instagram"></i></Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}