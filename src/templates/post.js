import { graphql } from "gatsby"
import React from "react"

import { MDXRenderer } from "gatsby-plugin-mdx"
import { Container } from "theme-ui"

const Post = ({ data }) => {
	const post = data.blog.posts[0]

  return (
    <Container>
      <h2>{ post.frontmatter.title }</h2>
			<MDXRenderer>{post.body}</MDXRenderer>
    </Container>
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