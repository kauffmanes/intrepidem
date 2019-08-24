import React from "react"
import { graphql } from "gatsby"
// import { Img } from "gatsby-image"
import styled from 'styled-components'
import Layout from "../components/layout"
// import MeAndLoki from "../images/loki.jpg"
import SEO from "../components/seo"
import PostLink from '../components/post-link'

const Container = styled.div`
  padding-top: 2rem;
  display: flex;
  max-width: 1200px;
  margin: 0 auto;
  @media (max-width: 800px) {
    padding: 2rem;
    display: block;
  }
  @media (max-width: 480px) {
    padding: 1rem;
  }
`

const AboutMe = styled.div`
  flex: 1;
  margin: 10vh 5vw;
  text-shadow: black 1px 1px 5px;
`

const Blog = styled.div`
  flex: 1;
  margin-top: 10vh;
`

const IndexPage = ({
  data: {
    allMarkdownRemark: { edges },
  },
}) => {
  
  // const Posts = edges
  //   .filter(edge => !!edge.node.frontmatter.date) // You can filter your posts based on some criteria
  //   .map(edge => <PostLink key={edge.node.id} post={edge.node} />)
    return (
  <Layout>
    <SEO title="Home" />
    <Container>
      <AboutMe>
        <h1>[in•trep•id-em]</h1>
        <p>adjective resolutely fearless, adventurous, undaunted, bold</p>
        <p>The name of my portfolio is a combination of the word "intrepid", and my name, "Em". I fully believe that in order to be a leader in design and user experience, you must be audacious. When balanced with conventions and best practices, you will produce an innovative product.</p>
      </AboutMe>
      <Blog>
        {/* {Posts} */}
      </Blog>
    </Container>
  </Layout>
)}

export default IndexPage
export const pageQuery = graphql`
  query {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }, limit:2) {
      edges {
        node {
          id
          excerpt(pruneLength: 100)
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            path
            title
          }
        }
      }
    }
  }
`