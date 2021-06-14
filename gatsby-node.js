const { createFilePath } = require("gatsby-source-filesystem")
const path = require("path");


exports.createPages = async ({ graphql, actions }) => {
	const { createPage } = actions

	const result = await graphql(`
		{
			blog: allMdx(filter: {frontmatter: {type: {eq: "post"}}})  {
				posts: nodes {
					slug
				}
			}
		}
	`)

	result.data.blog.posts.forEach(post => {
		createPage({
			path: `/blog/${post.slug}`,
			component: path.resolve("src/templates/post.js"),
			context: {
				slug: post.slug
			},
		})
	})
}