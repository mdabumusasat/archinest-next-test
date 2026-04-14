import React from "react";
import { SITE_NAME } from "../Head";
import LayoutWrapper from "../LayoutWrapper";
import Banner from "../section/home2/Banner";
import Client from "../section/home2/Client";
import About from "../section/home2/About";
import Service from "../section/home2/Service";
import Service2 from "../section/home2/Service2";
import Service3 from "../section/home2/Service3";
import Features from "../section/home2/Features";
import Features2 from "../section/home2/Features2";
import Project from "../section/home2/Project";
import Team from "../section/home2/Team";
import Faqs from "../section/home2/Faqs";
import Testimonial from "../section/home2/Testimonial";
import News from "../section/home2/News";


export const metadata = {
  title: `Home Layout2 || ${SITE_NAME}`,
};

const Home2: React.FC = (): JSX.Element => {
  return (
    <LayoutWrapper FooterStyle="two">
      <Banner />
      <Client />
      <About />
      <Service />
      <Service2 />
      <Service3 />
      <Features />
      <Features2 />
      <Project />
      <Team />
      <Faqs />
      <Testimonial />
      <News />
    </LayoutWrapper>
  );
};

export default Home2;