module.exports = {
  siteMetadata: {
    title: "personal-site",
  },
  plugins: [
    "gatsby-plugin-theme-ui",
    `gatsby-plugin-sharp`,
    `gatsby-remark-images`,
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/content/posts`,
        name: "posts"
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/assets`,
        name: "assets"
      }
    },
    {
      resolve: "gatsby-plugin-mdx",
      options: {
        extensions: [".mdx", ".md"],
        gatsbyRemarkPlugins: [
          `gatsby-remark-katex`,
          {
            resolve: `gatsby-remark-images`,
            options: {}
          }
        ],
        remarkPlugins: [require(`remark-math`), require(`remark-html-katex`)],
      }
    },
  ],
};
