// import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby' 

const StyledLink = styled(Link)`
    color: hotpink;
    text-decoration: none;
    border-bottom: solid 3px;
    &:hover {
        color: skyblue;
        border-bottom: solid 3px skyblue;
    }
`

export default StyledLink