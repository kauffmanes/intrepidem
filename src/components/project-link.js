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

const Tag = styled.span`
	border: solid 2px skyblue;
	display: inline-block;
	margin-right: .5rem;
	padding: .25rem;
`

const ProjectLink = ({ post }) => {
    const tags = post.frontmatter.tags && post.frontmatter.tags.split(",") || [];
    return (
        <Container>
            <PostTitle><Link to={post.frontmatter.path}>{post.frontmatter.title}</Link></PostTitle>
            <p>{post.frontmatter.date}</p>
            <p>{post.excerpt}</p>
            {tags.map(tag => <Tag>{tag}</Tag>)}
        </Container>
    )
}

export default ProjectLink
