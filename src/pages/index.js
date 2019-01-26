import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'

const IndexPage = () => (
  <Layout>
    <div style={{ paddingTop: '25vh' }}>
      <SEO title="Home" keywords={[`gatsby`, `application`, `react`]}/>
      <h2 style={{ fontSize: '4rem'}}>[in•<strong>trep</strong>•id-<strong>em</strong>]</h2>
      <p><em>adjective</em> resolutely fearless, adventurous, undaunted, bold</p>
      <p>The name of my portfolio is a combination of the word "intrepid", and my name, "Em". I fully believe that in order to be a leader in design and user experience, you must be audacious. When balanced with conventions and best practices, you will produce an innovative product.</p>
      {/* <Link to="/page-2/">Go to page 2</Link> */}
    </div>
  </Layout>
)

export default IndexPage
