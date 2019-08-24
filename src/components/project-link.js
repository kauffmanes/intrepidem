import React from 'react';
import styled from 'styled-components'
import Link from './Link'

const Container = styled.div`
    border-left: solid 3px skyblue;
    padding-left: 2rem;
    margin-bottom: 4rem;
`;

const PostTitle = styled.h2`
    margin-bottom: 1rem;
`

const ProjectLink = ({ post }) => (
    <Container>
        <PostTitle><Link to={post.frontmatter.path}>{post.frontmatter.title}</Link></PostTitle>
        <p>{post.frontmatter.date}</p>
        <p>{post.excerpt}</p>
    </Container>
)

export default ProjectLink
