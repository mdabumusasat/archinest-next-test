"use client";
import React from "react";
import Link from "next/link";

const teamData = [
  {
    id: 1,
    name: "Robert Fox",
    role: "Marketing Coordinator",
    image: "/assets/images/resource/team1-1.jpg",
  },
  {
    id: 2,
    name: "David Michael",
    role: "Marketing Coordinator",
    image: "/assets/images/resource/team1-2.jpg",
  },
  {
    id: 3,
    name: "David Jonathan Hayes",
    role: "Marketing Coordinator",
    image: "/assets/images/resource/team1-3.jpg",
  },
  {
    id: 4,
    name: "Junior Volunteer",
    role: "Marketing Coordinator",
    image: "/assets/images/resource/team1-4.jpg",
  },
  {
    id: 5,
    name: "Junior Volunteer",
    role: "Marketing Coordinator",
    image: "/assets/images/resource/team1-4.jpg",
  },
  {
    id: 6,
    name: "Robert Fox",
    role: "Marketing Coordinator",
    image: "/assets/images/resource/team1-1.jpg",
  },
  {
    id: 7,
    name: "David Michael",
    role: "Marketing Coordinator",
    image: "/assets/images/resource/team1-2.jpg",
  },
  {
    id: 8,
    name: "David Jonathan Hayes",
    role: "Marketing Coordinator",
    image: "/assets/images/resource/team1-3.jpg",
  },
];

const TeamsSection = () => {
  return (
    <section className="teams-section">
      <div className="auto-container">
        <div className="row">
          {teamData.map((member) => (
            <div key={member.id} className="team-block col-xl-3 col-sm-6">
              <div className="inner-block mb-20">
                <div className="image-box">
                  <figure className="image">
                    <Link href="#">
                      <img src={member.image} alt={member.name} />
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
};

export default TeamsSection;