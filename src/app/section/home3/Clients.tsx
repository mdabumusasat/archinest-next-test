"use client";
import React from "react";
import Link from "next/link";

const clients = [
  { img: "/assets/images/resource/client3-1.png" },
  { img: "/assets/images/resource/client3-2.png" },
  { img: "/assets/images/resource/client3-6.png" },
  { img: "/assets/images/resource/client3-4.png" },
  { img: "/assets/images/resource/client3-5.png" },
  { img: "/assets/images/resource/client3-6.png" },
  { img: "/assets/images/resource/client3-7.png" },
  { img: "/assets/images/resource/client3-8.png" },
];

const ClientsSection = () => {
  return (
    <section className="clients-section home-3 pt-0">
      <div className="outer-container">
        <div
          className="inner-container"
          style={{
            backgroundImage: "url(/assets/images/background/bg-claint1-1.jpg)",
          }}>
          <div className="outer-box">
            <div className="sec-title-style-three text-center">
              <h6 className="sub-title">// Our Partners //</h6>
              <h2 className="title text-reveal-anim">
                Our Important Partner.
              </h2>
            </div>
            <div className="claint-outer">
              {clients.map((client, index) => (
                <div className="client-block" key={index}>
                  <div className="inner-box">
                    <figure className="image mb-0">
                      <Link href="#">
                        <img src={client.img} alt={`Client ${index + 1}`} />
                      </Link>
                    </figure>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientsSection;