import React from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"
import styled from 'styled-components'
import StyledLink from '../components/Link'

const Container = styled.header`
  background: black;
`;

const Menu = styled.nav`
  float: right;
  list-style: none;
`;

const MenuItem = styled.li`
  display: inline-block;
  margin-right: 2rem;
  text-transform: uppercase;
  color: white;
`;

const Logo = styled.h1`
  margin: 0;
  display: inline-block;
`;

const LogoLink = styled(StyledLink)`
  border-bottom: none;
  color: skyblue;
  font-size: 2rem;
`;

const Header = ({ siteTitle }) => (
  <Container>
    <div
      style={{
        // margin: `0 auto`,
        // maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
      }}
    >
      <Logo>
        <LogoLink
          to="/"
        >
          {siteTitle}
        </LogoLink>
      </Logo>
      <Menu>
        <MenuItem><StyledLink to='/projects'>Projects</StyledLink></MenuItem>
        <MenuItem><StyledLink to='/writing'>Writing</StyledLink></MenuItem>
        {/* <MenuItem><StyledLink t>Contact</StyledLink></MenuItem> */}
      </Menu>
    </div>
    </Container>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
