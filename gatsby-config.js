module.exports = {
  siteMetadata: {
    title: "personal-site",
  },
  plugins: [
    "gatsby-plugin-theme-ui",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/content/posts`,
        name: "posts"
      },
    },
    {
      resolve: "gatsby-plugin-mdx",
      options: {
        extensions: [".mdx", ".md"],
        gatsbyRemarkPlugins: [`gatsby-remark-katex`],
        remarkPlugins: [require(`remark-math`), require(`remark-html-katex`)],
      }
    },
  ],
};
