const { createFilePath } = require("gatsby-source-filesystem");
const path = require("path");

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  const result = await graphql(`
    {
      blog: allMdx(
        filter: { frontmatter: { type: { eq: "post" } } }
      ) {
        posts: edges {
          post: node {
            slug
          }
        }
      }
    }
  `);

  result.data.blog.posts.forEach((p) => {
    createPage({
      path: `/blog/${p.post.slug}`,
      component: path.resolve("src/templates/post.js"),
      context: {
        slug: p.post.slug,
      },
    });
  });
};
