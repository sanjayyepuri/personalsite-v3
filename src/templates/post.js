import { graphql } from "gatsby"
import React from "react"

import { MDXProvider } from "@mdx-js/react"
import { MDXRenderer } from "gatsby-plugin-mdx"
import Layout from "../components/layout"
import { Box } from "theme-ui"
import { Column, Row } from "@carbonplan/components"



const Post = ({ data }) => {
  const post = data.blog.posts[0]

  return (
    <Layout>
      <Row sx={{ mb: [8, 8, 9, 10] }}>
        <Column start={[1, 2, 3, 3]} width={[6, 7]}>
          <Box as="h1" variant="styles.h1" sx={{
            mt: [5, 6, 7, 8],
            mb: [5, 6, 7, 8]
          }}>
            {post.frontmatter.title}
          </Box>
          <MDXProvider>
            <MDXRenderer>{post.body}</MDXRenderer>
          </MDXProvider>
        </Column>

      </Row>
    </Layout>
  )
}

export default Post

export const query = graphql`
  query BlogQuery($slug: String!) {
    blog: allMdx(filter: { slug: { eq: $slug } }) {
      posts: nodes {
				body
        slug
        frontmatter {
          title
        }
      }
    }
  }
`