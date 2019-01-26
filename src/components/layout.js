import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'

import Header from './header'
import './layout.css'
import './variables.css'

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <Header siteTitle={data.site.siteMetadata.title} />
        <div
          style={{
            background: 'var(--dandelion)',
            paddingTop: 0,
            minHeight: '90vh',
            margin: 0
          }}
        >
          <div style={{
            margin: `0 auto`,
            maxWidth: 960,
            padding: `0px 1.0875rem 1.45rem`,
          }}>
            {children}
          </div>
          <footer>
            {/* © {new Date().getFullYear()}, Built with
            {` `} */}
            {/* <a href="https://www.gatsbyjs.org">Gatsby</a> */}
          </footer>
        </div>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
