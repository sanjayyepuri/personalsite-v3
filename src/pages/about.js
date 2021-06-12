import * as React from "react";

// load fonts and css
import "@carbonplan/components/globals.css";
import "@carbonplan/components/fonts.css";
import "katex/dist/katex.min.css";

// components
import Layout from "../components/layout";

import { Box, Heading, Text } from "theme-ui";
import { Row, Column, Expander, Buttons } from "@carbonplan/components";
import AnimateHeight from "react-animate-height";

const { ArrowButton } = Buttons;

const Intro = () => (
  <Box mt={[2, 5]} mb={[2, 5]}>
    <Row>
      <Column start={[1, 1, 2, 2]} width={[4, 2, 3, 2]}>
        <Heading
          sx={{
            letterSpacing: "heading",
            fontSize: [6, 6, 8, 9],
          }}>
          Hello, World!
        </Heading>
      </Column>

      <Column start={[1, 3, 5, 5]} width={[5, 4, 5, 5]}>
        <Box
          sx={{
            pt: [2, 2],
            fontSize: [3, 3, 4, 5],
          }}>
          <Text>
            Hi, I’m a student at the University of Texas at Austin, majoring in
            Computer Science and Mathematics. Feel free to shoot me an email if
            you have anything to say, interesting articles, job opportunities,
            etc.
          </Text>
        </Box>
      </Column>
    </Row>
  </Box>
);

const CourseList = [
  "Stochastic Processes",
  "Real Analysis",
  "Mathematical Statistics",
  "Predictive Analytics",
  "Algebraic Structures",
  "Neural Networks",
  "Computer Vision",
  "Honors Artificial Intelligence",
  "Honors Computer Graphics",
  "Honors Operating Systems",
  "Honors Concurrency",
  "Honors Quantum Information Theory",
  "Information Retrieval",
  "Programming Languages",
  "Multicore Operating Systems",
];

const CourseWork = () => (
  <Box mt={[3, 2, 6, 6]} mb={[3, 2, 6, 6]}>
    <Row mb={[1, 2]}>
      <Column start={[1, 1, 2, 2]} width={[3]}>
        <Heading
          sx={{
            fontSize: [4, 5],
          }}>
          Course Work
        </Heading>
      </Column>
    </Row>

    <Row>
      <Column start={[1, 1, 2, 2]} width={[6, 7, 8, 8]}>
        <Text
          sx={{
            color: "secondary",
            fontSize: [2, 3, 3, 4],
            fontFamily: "faux",
            letterSpacing: "faux",
            textTransform: "uppercase",
          }}>
          {CourseList.join(" ● ")}
        </Text>
      </Column>
    </Row>
  </Box>
);

const Jobs = [
  {
    role: "Undergraduate TA",
    company: "UT Austin",
    start: "Aug 2020",
    end: "Dec 2020",
  },
  {
    role: "Software Engineer Intern",
    company: "Citadel",
    start: "Jun 2020",
    end: "Aug 2020",
  },
  {
    role: "SDE Intern",
    company: "Amazon",
    start: "Jun 2019",
    end: "Aug 2019",
  },
  {
    role: "Software Engineer Intern",
    company: "Reveal Energy Services",
    start: "Sep 2016",
    end: "Sep 2017",
  },
  {
    role: "Software Development Intern",
    company: "Sigma Cubed Inc.",
    start: "Jun 2016",
    end: "Sep 2016",
  },
];

const Job = ({ job }) => {
  const [expanded, setExpanded] = React.useState(false);

  return (
    <Box>
      <Box sx={{ fontSize: [3, 3, 3, 4] }}>
        <Row columns={[6, 7, 8, 8]}>
          <Column start={[1]} width={[6, 4, 4, 4]}>
            <Box sx={{ pt: "1px" }}>
              <Text sx={{ fontFamily: "heading" }}> {job.company} </Text>
              <Text
                sx={{
                  display: "inline-block",
                  color: "muted",
                  fontSize: [2, 2, 2, 3],
                }}>
                {job.role}
              </Text>
            </Box>
          </Column>

          <Column start={[1, 5, 6, 6]} width={[3, 3, 3, 2]}>
            <Box
              sx={{
                display: "inline-block",
                fontFamily: "mono",
                textTransform: "uppercase",
                fontSize: [2],
                color: "secondary",
                mr: [2],
              }}>
              <Text> {job.start} - {job.end} </Text>
            </Box>
            <Expander
              value={expanded}
              onClick={() => setExpanded(!expanded)}
              sx={{ position: "relative", top: ["2px"] }}
            />
          </Column>
        </Row>
      </Box>

      <AnimateHeight height={expanded ? "auto" : 0}>
        <Box>
          Founded an education non-profit, CovEducation (coved.org), focused on
          providing mentorship to public school students adversely impacted by
          the COVID-19 pandemic.
        </Box>
      </AnimateHeight>
			<hr />
    </Box>
  );
};

const Experience = () => (
  <Box mt={[3, 3, 6, 6]} mb={[3, 2, 6, 6]}>
		<Row mb={[1, 2]}>
      <Column start={[1, 1, 2, 2]} width={[3]}>
        <Heading
          sx={{
            fontSize: [4, 5],
          }}>
          Experience
        </Heading>
      </Column>
			</Row>
    <Row mb={[1, 2]}>
      <Column start={[1, 1, 2, 2]} width={[6, 7, 8, 8]}>
        {Jobs.map((job) => (
          <Job job={job} />
        ))}
      </Column>
    </Row>
  </Box>
);

// markup
const IndexPage = () => {
  return (
    <Layout mode="mouse">
      <Intro />
      <CourseWork />
      <Experience />
    </Layout>
  );
};

export default IndexPage;
