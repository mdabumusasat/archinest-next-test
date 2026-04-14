"use client";
import React from "react";
import Link from "next/link";

const clients = [
  { id: 1, image: "/assets/images/resource/client1-1.png" },
  { id: 2, image: "/assets/images/resource/client1-2.png" },
  { id: 3, image: "/assets/images/resource/client1-3.png" },
  { id: 4, image: "/assets/images/resource/client1-4.png" },
  { id: 5, image: "/assets/images/resource/client1-5.png" },
  { id: 6, image: "/assets/images/resource/client1-6.png" },
  { id: 7, image: "/assets/images/resource/client1-7.png" },
  { id: 8, image: "/assets/images/resource/client1-8.png" },
];

export default function ClientsSection() {
  return (
    <section className="clients-section pt-0">
      <div className="large-container">
        <div
          className="inner-container"
          style={{
            backgroundImage: "url(/assets/images/background/bg-claint1-1.jpg)",
          }}>
          <div className="outer-box">
            <div className="sec-title-style-three white text-center">
              <h6 className="sub-title">// Our Partners //</h6>
              <h2 className="title text-reveal-anim">
                Our Important Partner.
              </h2>
            </div>
            <div className="claint-outer">
              {clients.map((client) => (
                <div key={client.id} className="client-block">
                  <div className="inner-box">
                    <figure className="image mb-0">
                      <Link href="#">
                        <img
                          src={client.image}
                          alt={`client-${client.id}`}
                        />
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
}