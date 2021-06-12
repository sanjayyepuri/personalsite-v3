import { graphql, Link } from "gatsby"
import React from "react"

import { MDXProvider } from "@mdx-js/react"
import { MDXRenderer } from "gatsby-plugin-mdx"
import Layout from "../components/layout"
import { Box, Text } from "theme-ui"
import { Column, Row, Buttons } from "@carbonplan/components"

const { BackButton } = Buttons



const Post = ({ data }) => {
  const post = data.blog.posts[0]

  return (
    <Layout>
      <Row sx={{ mb: [8, 8, 9, 10] }}>
				<Column start={[1, 1, 1, 1]} width={[2]}>
					<Box sx={{
            mt: [5, 6, 7, 8],
            mb: [1, 6, 7, 8],
						pt: [2, 2, 2, 2]
          }}>
						<Link to={"/"}>
							<BackButton />
						</Link>
					</Box>
				</Column>

        <Column start={[1, 2, 3, 3]} width={[6, 6]}>
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

				<Column start={[2, 8, 10, 10]} width={[2, 2, 2, 2]}>
					<Box sx={{
            mt: [5, 6, 7, 8],
            mb: [1, 6, 7, 8],
						pt: [2, 2, 2, 2]
          }}>
						<Text sx={{
							fontFamily: "mono",
							fontSpacing: "mono",
							fontSize: "3"
						}}>
							{ post.frontmatter.author }
							<br />
							{ new Date(post.frontmatter.date).toDateString() }
						</Text>
					</Box>
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
					author
					date
        }
      }
    }
  }
`