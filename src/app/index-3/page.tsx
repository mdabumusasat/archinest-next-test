import React from "react";
import { SITE_NAME } from "../Head";
import LayoutWrapper from "../LayoutWrapper";
import Banner from "../section/home3/Banner";
import Service from "../section/home3/Service";
import About from "../section/home3/About";
import Service2 from "../section/home3/Service2";
import Funfact from "../section/home3/Funfact";
import Project from "../section/home3/Project";
import Pricing from "../section/home3/Pricing";
import Features from "../section/home3/Features";
import Service3 from "../section/home3/Service3";
import Award from "../section/home3/Award";
import Testimonials from "../section/home3/Testimonials";
import Clients from "../section/home3/Clients";
import News from "../section/home3/News";

export const metadata = {
  title: `Home Layout3 || ${SITE_NAME}`,
};

const Home3: React.FC = (): JSX.Element => {
  return (
    <LayoutWrapper HeaderStyle="three">
      <Banner />
      <Service />
      <About />
      <Service2 />
      <Funfact />
      <Project />
      <Pricing />
      <Features />
      <Service3 />
      <Award />
      <Testimonials />
      <Clients />
      <News />
    </LayoutWrapper>
  );
};

export default Home3;