import * as React from "react";

// load fonts and css
import "@carbonplan/components/globals.css";
import "@carbonplan/components/fonts.css";
import "katex/dist/katex.min.css";

// components
import Layout from "../components/layout";

import Intro from "../components/resume/intro";
import CourseWork from "../components/resume/course";
import Experience from "../components/resume/experience";

// markup
const AboutPage = () => {
  return (
    <Layout mode="mouse">
      <Intro />
      <CourseWork />
      <Experience />
    </Layout>
  );
};

export default AboutPage;
