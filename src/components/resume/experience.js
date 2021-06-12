import React from "react";

import { Box, Text, Heading } from "theme-ui";
import { Expander, Row, Column } from "@carbonplan/components";
import { graphql, useStaticQuery } from "gatsby";
import AnimateHeight from "react-animate-height";
import { MDXRenderer } from "gatsby-plugin-mdx";

const Job = ({ job }) => {
  const [expanded, setExpanded] = React.useState(false);

  return (
    <Box>
      <Box
        onClick={() => setExpanded(!expanded)}
        sx={{
          fontSize: [3, 3, 3, 4],
          "&:hover": {
            cursor: "pointer",
            color: "blue",
          },
        }}
      >
        <Row columns={[6, 7, 8, 8]}>
          <Column start={[1]} width={[6, 4, 5, 5]}>
            <Box sx={{ pt: "1px" }}>
              <Text sx={{ fontFamily: "heading" }}>
                {job.frontmatter.title}{" "}
              </Text>
              <Text
                sx={{
                  display: "inline-block",
                  color: "grey",
                  fontSize: [2, 2, 2, 3],
                }}
              >
                {job.frontmatter.role}
              </Text>
            </Box>
          </Column>

          <Column start={[1, 5, 6, 6]} width={[3, 3, 3, 2]}>
            <Box sx={{ float: ["inherit", "right", "right", "right"] }}>
              <Box
                sx={{
                  display: "inline-block",
                  fontFamily: "mono",
                  textTransform: "uppercase",
                  fontSize: [2],
                  color: "secondary",
                  mr: [2],
                }}
              >
                <Text>
                  {job.frontmatter.start} - {job.frontmatter.end}{" "}
                </Text>
              </Box>
              <Expander
                value={expanded}
                onClick={() => setExpanded(!expanded)}
                sx={{ position: "relative", top: ["2px"] }}
              />
            </Box>
          </Column>
        </Row>
      </Box>

      <AnimateHeight height={expanded ? "auto" : 0}>
        <Box>
          <MDXRenderer>{job.body}</MDXRenderer>
        </Box>
      </AnimateHeight>
      <hr />
    </Box>
  );
};

const Experience = () => {
  const data = useStaticQuery(graphql`
    {
      experience: allMdx(
        sort: { fields: frontmatter___date, order: DESC }
        filter: { frontmatter: { type: { eq: "job" } } }
      ) {
        jobs: nodes {
          body
          frontmatter {
            title
            role
            start
            end
          }
        }
      }
    }
  `);

  return (
    <Box mt={[3, 3, 6, 6]} mb={[3, 2, 6, 6]}>
      <Row mb={[1, 2]}>
        <Column start={[1, 1, 2, 2]} width={[3]}>
          <Heading
            sx={{
              fontSize: [4, 5],
            }}
          >
            Experience
          </Heading>
        </Column>
      </Row>
      <Row mb={[1, 2]}>
        <Column start={[1, 1, 2, 2]} width={[6, 7, 8, 8]}>
          {data.experience.jobs.map((job) => (
            <Job job={job} />
          ))}
        </Column>
      </Row>
    </Box>
  );
};

export default Experience;
