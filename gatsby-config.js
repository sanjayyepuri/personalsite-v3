require("dotenv").config();

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
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/resume`,
        name: `resume`
      },
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
    {
      resolve: "gatsby-plugin-web-font-loader",
      options: {
        typekit: {
          id: process.env.TYPEKIT_ID
        }
      }
    },
    {
      resolve: "gatsby-plugin-google-gtag",
      options: {
        trackingIds: [
          "UA-127947585-1"
        ]
      }
    }
  ],
};
