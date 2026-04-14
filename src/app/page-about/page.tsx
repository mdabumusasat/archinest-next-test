import React from "react";
import { SITE_NAME } from "../Head";
import LayoutWrapper from "../LayoutWrapper";
import PageTitle from "../components/PageTitle";
import About from "../section/home2/About";
import Funfact from "../section/home1/Funfact";
import Service2 from "../section/home1/Service2";
import Testimonial from "../section/home2/Testimonial";
import Client from "../section/home2/Client";

export const metadata = {
  title: `About Pages || ${SITE_NAME}`,
};

const AboutPage: React.FC = (): JSX.Element => {
    return (
        <>
        <LayoutWrapper>
            <PageTitle pageName="About Us" />
            <About />
            <Funfact />
            <Service2 />
            <Testimonial />
            <Client className="mb-20"/>
        </LayoutWrapper>
        </>
    );
};

export default AboutPage;