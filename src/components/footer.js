import React from 'react'
import styled from 'styled-components'

const StyledFooter = styled.footer`
    background: black;
    color: white;
    padding: 2rem;
    min-height: 10vh;
`

const Footer = () => (
    <StyledFooter>
        © {new Date().getFullYear()}, Emily Kauffman
    </StyledFooter>
)

export default Footer