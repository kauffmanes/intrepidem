require("dotenv").config()

module.exports = {
  siteMetadata: {
    title: `Emily Kauffman`,
    description: `The personal portfolio and blog of Emily Kauffman`,
    author: `Emily Kauffman`,
  },
  plugins: [
    {
      resolve: `gatsby-source-github-api`,
      options: {
        token: process.env.GITHUB_API_TOKEN,
        graphQLQuery: `
          query ($author: String = "", $userFirst: Int = 0, $searchFirst: Int = 0, $q: String = "") {
            user(login: $author) {
              repositories(first: $userFirst, orderBy: {field: STARGAZERS, direction: DESC}) {
                edges {
                  node {
                    name
                    description
                    url
                    stargazers {
                      totalCount
                    }
                    readme: object(expression:"master:README.md"){
                      ... on Blob{
                        text
                      }
                    }
                  }
                }
              }
            }
            search(query: $q, type: ISSUE, first: $searchFirst) {
              edges {
                node {
                  ... on PullRequest {
                    title
                    merged
                    url
                    state
                    repository {
                      stargazers {
                        totalCount
                      }
                      repoUrl: url
                      name
                    }
                  }
                }
              }
            }
          }
        `,
        variables: {
          userFirst: 10,
          searchFirst: 2,
          q: "author:kauffmanes is:merged state:closed type:pr sort:comments",
          author: "kauffmanes"
        }
      }
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 800,
              linkImagesToOriginal: true,
              showCaptions: true
            }
          }
        ]
      }
    },
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`
      }
    },
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `videos`,
        path: `${__dirname}/src/videos`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `posts`,
        path: `${__dirname}/src/content/posts`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `projects`,
        path: `${__dirname}/src/content/projects`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
