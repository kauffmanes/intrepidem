import React from "react"
import { graphql } from "gatsby"
import styled from 'styled-components'
import Layout from "../components/layout"
// import Link from '../components/Link'
import SEO from "../components/seo"
import PostLink from "../components/post-link"

const Container = styled.div`
  display: flex;
`;

const Filters = styled.div`
  color: white;
  max-width: 900px;
  padding: 4rem;
  margin: 0 auto;
  flex: 1;
  background: black;
`;

const PostList = styled.div`
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

const Title = styled.h2`
  text-orientation: sideways;
  writing-mode: vertical-lr;
  // font-family: sans-serif;
  font-size: 3rem;
  text-transform: uppercase;
`;

const ListDescription = styled.p`
  margin-bottom: 6rem;
`;

const Writing = ({
  data: {
    allMarkdownRemark: { edges },
  },
}) => {
  const Posts = edges
    .filter(edge => !!edge.node.frontmatter.date) // You can filter your posts based on some criteria
    .map(edge => <PostLink key={edge.node.id} post={edge.node} />)

  return (
    <Layout>
      <SEO title="Writing" />
      <Container>
        <Filters>
          <Title>Writing</Title>
        </Filters>
        <PostList>
          <h1>Intrepidem Ramblings</h1>
          <ListDescription>This list contain all of the posts that were made on intrepidem.</ListDescription>
          <div>{Posts}</div>
        </PostList>
        <OtherResources>
          <h1>Other stuff</h1>
          <p>Coming soon!</p>
        </OtherResources>
      </Container>
    </Layout>
  )
}

export default Writing
export const pageQuery = graphql`
  query {
    allMarkdownRemark(
      sort: {
        order: DESC,
        fields: [frontmatter___date]
      },
      filter: { fileAbsolutePath: {regex : "/src\/content\/posts/"} }
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