import React from "react"
import styled from 'styled-components'
import { graphql } from "gatsby"

// import Link from '../components/Link'
import Layout from "../components/layout"
import SEO from "../components/seo"
import ProjectLink from "../components/project-link"

const Container = styled.div`
  display: flex;
`;

const Filters = styled.div`
  background: black;
  color: white;
  max-width: 900px;
  padding: 4rem;
  margin: 0 auto;
  flex: 1;
`;

const ProjectList = styled.div`
  background: black;
  color: white;
  max-width: 900px;
  padding: 4rem;
  margin: 0 auto;
  flex: 2;
`;

const OtherResources = styled.div`
  background: black;
  color: white;
  max-width: 900px;
  padding: 4rem;
  margin: 0 auto;
  flex: 2;
`;

const Projects = ({
  data: {
    allMarkdownRemark: { edges },
  },
}) => {

  const Projects = edges
    .map(edge => <ProjectLink key={edge.node.id} post={edge.node} />)

  return (
  <Layout>
    <SEO title="Projects" />
    <Container>
        <Filters>
          {/* <h1>Filters</h1> */}
        </Filters>
        <ProjectList>
          <h1>Cool projects</h1>
          <div>{Projects}</div>
        </ProjectList>
        <OtherResources>
          <h1>Github repos</h1>
          <p>Coming soon!</p>
        </OtherResources>
      </Container>
  </Layout>
)}

export default Projects
export const pageQuery = graphql`
query {
  allMarkdownRemark(
    sort: {
      order: DESC,
      fields: [frontmatter___date]
    },
    filter: { fileAbsolutePath: {regex : "/src\/content\/projects/"} }
  ) {
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