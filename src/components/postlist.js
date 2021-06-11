import React from "react";
import { graphql, useStaticQuery } from "gatsby";

import { Buttons } from "@carbonplan/components";
import { Box, Grid, Text } from "theme-ui";

const { ArrowButton } = Buttons;

const PostPreview = ({ post }) => (
  <Box>
    <ArrowButton label={post.frontmatter.title} size="lg" />
    <Grid gap={2} columns={[1, "1fr 1fr"]}>
      <Text>
        { post.excerpt }
      </Text>
      <Text
        sx={{
          mx: [0, 3],
          letterSpacing: "smallcaps",
          fontFamily: "mono",
          fontSize: 1,
        }}
      >
        { post.frontmatter.date }
      </Text>
    </Grid>
    <hr sx={{ color: "muted" }} />
  </Box>
);

const PostList = () => {
  const data = useStaticQuery(graphql`
    {
      blog: allMdx {
        posts: nodes {
          excerpt
          frontmatter {
            title
						date
          }
        }
      }
    }
  `);

  return (
    <Box>
      {data && data.blog.posts.map((post) => <PostPreview post={post} />)}
    </Box>
  );
};

export default PostList;
