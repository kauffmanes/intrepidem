import React from "react"
import { graphql } from "gatsby"
import styled from "styled-components"
import Layout from '../components/Layout'
import Link from '../components/Link'

const BlogPost = styled.div`
    background: white;
    color: black;
    max-width: 900px;
    padding: 4rem;
    margin: 0 auto;
`

const BlogContent = styled.div``;

const StyledLink = styled(Link)`
  margin-bottom: 2rem;
  display: inline-block;
`

const Date = styled.h2`
  color: gray;
`;

export default function Template({ data }) {
  const { markdownRemark } = data // data.markdownRemark holds your post data
  const { frontmatter, html } = markdownRemark
  return (
    <Layout>
        <BlogPost>
          <StyledLink to='/projects'>Back to projects</StyledLink>
          <h1>{frontmatter.title}</h1>
          <Date>{frontmatter.date}</Date>
          <BlogContent dangerouslySetInnerHTML={{ __html: html }} />
        </BlogPost>
    </Layout>
  )
}
export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
      }
    }
  }
`