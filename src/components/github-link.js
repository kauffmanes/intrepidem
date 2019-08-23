import React from 'react';
import styled from 'styled-components'
import Anchor from './Anchor'

const Container = styled.div`
    border-left: solid 3px skyblue;
    padding-left: 2rem;
    margin-bottom: 4rem;
`;

const ProjectTitle = styled.h2`
    margin-bottom: 1rem;
`

const GithubLink = ({ repo }) => (
    <Container>
        <ProjectTitle><Anchor href={repo.url} target="_blank">{repo.name}</Anchor></ProjectTitle>
        <p>{repo.description}</p>
    </Container>
)

export default GithubLink
