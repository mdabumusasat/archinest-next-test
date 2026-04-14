
import React from 'react';
import { SITE_NAME } from "../app/Head";
import LayoutWrapper from './LayoutWrapper';
import Banner from "./section/home1/Banner";
import Service from "./section/home1/Service";
import About from "./section/home1/About";
import Funfact from "./section/home1/Funfact";
import Service2 from "./section/home1/Service2";
import ChooseUs from "./section/home1/ChooseUs";
import Service3 from "./section/home1/Service3";
import Project from "./section/home1/Project";
import Work from "./section/home1/Work";
import Pricing from "./section/home1/Pricing";
import Teams from "./section/home1/Teams";
import Clients from "./section/home1/Clients";
import Testimonial from "./section/home1/Testimonial";
import News from "./section/home1/News";

export const metadata = {
  title: `Home Layout1 || ${SITE_NAME}`,
};

const Home: React.FC = (): JSX.Element => {
    return (
        <>
        <LayoutWrapper>
            <Banner />
            <Service />
            <About />
            <Funfact />
            <Service2 />
            <ChooseUs />
            <Service3 />
            <Project />
            <Work />
            <Pricing />
            <Teams />
            <Clients />
            <Testimonial />
            <News />
        </LayoutWrapper>
        </>
    );
};

export default Home;