/** @jsx jsx */
import { jsx } from "theme-ui"; 

import { graphql, Link } from "gatsby";

import "katex/dist/katex.min.css";

import Layout from "../components/layout";

import { MDXRenderer } from "gatsby-plugin-mdx";

import { Box, Text } from "theme-ui";
import { Column, Row, Button } from "@carbonplan/components";
import { Left } from "@carbonplan/icons";

const Post = ({ data }) => {
  const { blog } = data;
  const [{ body, frontmatter }] = blog.nodes;
  console.log(frontmatter);

  return (
    <Layout mode="scroll">
      <Row sx={{ mb: [8, 8, 9, 10] }}>
        <Column start={[1, 1, 1, 1]} width={[2]}>
          <Box
            sx={{
              mt: [5, 6, 7, 8],
              mb: [1, 6, 7, 8],
              pt: [2, 2, 2, 2],
            }}
          >
            <Link to={"/blog"}>
              <Button prefix={<Left />}>Back</Button>
            </Link>
          </Box>
        </Column>

        <Column start={[1, 2, 3, 3]} width={[6, 6]}>
          <Box
            as="h1"
            variant="styles.h1"
            sx={{
              mt: [5, 6, 7, 8],
              mb: [5, 6, 7, 8],
            }}
          >
            {frontmatter.title}
          </Box>
          <MDXRenderer>{ body }</MDXRenderer>
        </Column>

        <Column start={[1, 8, 10, 10]} width={[2, 2, 2, 2]}>
          <Box
            sx={{
              mt: [5, 6, 7, 8],
              mb: [1, 6, 7, 8],
              pt: [2, 2, 2, 2],
            }}
          >
            <Text
              sx={{
                fontFamily: "mono",
                fontSpacing: "mono",
                fontSize: "3",
              }}
            >
              {frontmatter.author.toUpperCase()}
              <br />
              {new Date(frontmatter.date).toDateString().toUpperCase()}
            </Text>
          </Box>
        </Column>
      </Row>
    </Layout>
  );
};

export default Post;

export const query = graphql`
  query BlogQuery($slug: String!) {
    blog: allMdx(filter: { slug: { eq: $slug } }) {
      nodes {
        body
        frontmatter {
          date
          title
          author
        }
      }
    }
  }
`;
