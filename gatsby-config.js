const path = require('path');
require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
});
require('@babel/polyfill');

module.exports = {
  siteMetadata: {
    title: `Medical Student COVID-19 Action Network`,
    author: `Public Health Coalition`,
    about: `Medical Student COVID-19 Action Network`,
    description: `This is a time of crisis for our world. As it stands, there have been over 1,000,000 cases of COVID-19, and that number is rising daily.`,
    siteUrl: `https://publichealthcoalition.org`,
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-mdx',
    },
    {
      resolve: '@directus/gatsby-source-directus',
      options: {
        url: `https://data.publichealthcoalition.org`,
        project: '_',
        auth: {
          email: process.env.DIRECTUS_EMAIL || '',
          password: process.env.DIRECTUS_PASSWORD || '',
        },
        targetStatuses: ['published', '__NONE__'],
      },
    },
    {
      resolve: `gatsby-plugin-graphql-codegen`,
      options: {
        fileName: `generated/types.ts`,
        documentPaths: ['./src/pages/*.{ts,tsx}'],
        codegenDelay: 200,
        pluckConfig: {
          globalGqlIdentifierName: 'graphql',
          modules: [{ name: 'gatsby', identifier: 'graphql' }],
        },
      },
    },
    {
      resolve: `gatsby-plugin-styled-components`,
      options: {
        minify: false, // Breaks styles if not set to false
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/blog`,
        name: `blog`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/assets`,
        name: `assets`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
              linkImagesToOriginal: true,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          {
            resolve: `gatsby-remark-katex`,
            options: {
              // Add any KaTeX options from https://github.com/KaTeX/KaTeX/blob/master/docs/options.md here
              strict: `ignore`,
            },
          },
          {
            resolve: `gatsby-remark-mermaid`,
          },
          {
            resolve: `gatsby-remark-prismjs`,
          },
          {
            resolve: `gatsby-remark-prismjs`,
          },

          {
            resolve: `gatsby-remark-copy-linked-files`,
          },
          {
            resolve: `gatsby-remark-smartypants`,
          },
        ],
      },
    },
    {
      resolve: `gatsby-transformer-sharp`,
    },
    {
      resolve: `gatsby-plugin-sharp`,
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: 'UA-161712632-1',
      },
    },
    {
      resolve: `gatsby-plugin-feed`,
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Medical Student COVID-19 Volunteer Network`,
        short_name: `MSCVN`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `content/assets/favicon.png`,
      },
    },
    {
      resolve: `gatsby-plugin-offline`,
    },
    {
      resolve: `gatsby-plugin-react-helmet`,
    },
    {
      resolve: `gatsby-plugin-typescript`,
    },
    {
      resolve: `gatsby-plugin-lodash`,
    },
    // {
    //   resolve: 'gatsby-plugin-mailchimp',
    //   options: {
    //     endpoint: '', // add your MC list endpoint here; see instructions below
    //   },
    // },
    {
      resolve: `gatsby-source-instagram`,
      options: {
        // username: ,
        // access_token: ,
        // instagram_id: ,
      },
    },
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `Poppins`,
            variants: [`300`, `400`, `500`, `600`, `700`],
          },
          {
            family: `Fira Sans`,
            variants: [`100`, `300`, `400`, `500`, `600`, `700`],
          },
        ],
      },
    },
  ],
};
