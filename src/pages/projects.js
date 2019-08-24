import React from "react"
import styled from 'styled-components'
import { graphql } from "gatsby"

// import Link from '../components/Link'
import Layout from "../components/layout"
import SEO from "../components/seo"
import ProjectLink from "../components/project-link"
import GithubLink from "../components/github-link"
import Anchor from "../components/Anchor"

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  @media (max-width: 974px) {
    display: block;
  }
`;

const Filters = styled.div`
  background: black;
  color: white;
  max-width: 974px;
  padding: 4rem;
  margin: 0 auto;
  flex: 1;
  @media (max-width: 480px) {
    padding: 1rem;
  }
`;

const ProjectList = styled.div`
  background: black;
  color: white;
  max-width: 974px;
  padding: 4rem;
  margin: 0 auto;
  flex: 2;
  @media (max-width: 480px) {
    padding: 1rem;
  }
`;

const OtherResources = styled.div`
  background: black;
  color: white;
  max-width: 974px;
  padding: 4rem;
  margin: 0 auto;
  flex: 2;
  @media (max-width: 480px) {
    padding: 1rem;
  }
`;

const ListDescription = styled.p`
  margin-bottom: 6rem;
`;

const Title = styled.h2`
  text-orientation: sideways;
  writing-mode: vertical-lr;
  font-size: 3rem;
  @media (max-width: 974px) {
    text-orientation: unset;
    writing-mode: unset;
  }
`;

const Projects = ({
  data: {
    allMarkdownRemark: { edges },
    allGithubData: { nodes }
  },
}) => {

  const repos = nodes && nodes.length > 0 && nodes[0] && nodes[0].data && nodes[0].data.user && nodes[0].data.user.repositories && nodes[0].data.user.repositories.edges;
  const RepoList = repos.map(repo => <GithubLink key={repo.node.name} repo={repo.node} />)
  const Projects = edges
    .map(edge => <ProjectLink key={edge.node.id} post={edge.node} />)

  return (
  <Layout>
    <SEO title="Projects" />
    <Container>
        <Filters>
          <Title>PROJECTS</Title>
        </Filters>
        <ProjectList>
          <h1>Cool projects</h1>
          <ListDescription>Check out some of my completed projects!</ListDescription>
          <div>{Projects}</div>
        </ProjectList>
        <OtherResources>
          <h1>Github repos</h1>
          <ListDescription>These are some recent projects I've been working on or contributing to via work, school, or fun. Many of these are in progress, so use at your own risk!</ListDescription>
          <div>{RepoList}</div>
          <Anchor href="https://github.com/kauffmanes?tab=repositories" target="_blank">See more >></Anchor>
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
          path
          title
        }
      }
    }
  },
  allGithubData {
    nodes {
      data {
        user {
          repositories {
            edges {
              node {
                description
                name
                url
              }
            }
          }
        }
      }
    }
  }
}
`