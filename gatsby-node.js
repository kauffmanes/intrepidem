/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const path = require('path')

// gets all of the posts
exports.createPages = async ({ actions, graphql }) => {

    const { createPage } = actions
    const blogPostTemplate = path.resolve(`src/templates/post.js`)
    const projectDetailsTemplate = path.resolve(`src/templates/project.js`)

    const result = await graphql(`
      {
        allMarkdownRemark(
          sort: { order: DESC, fields: [frontmatter___date] },
          limit: 1000
        ) {
          edges {
            node {
              frontmatter {
                path
              }
            }
          }
        }
      }
    `)

    if (result.errors) {
      console.log(result.errors)
      throw new Error("Things broke, see console output above")
    }
    
    result.data.allMarkdownRemark.edges.forEach(({ node }) => {
      let template;
      if (node.frontmatter.path.includes('/projects/')) {
        template = projectDetailsTemplate
      } else {
        template = blogPostTemplate
      }
      createPage({
        path: node.frontmatter.path,
        component: template,
        context: {}, // additional data can be passed via context
      })

    })
  }