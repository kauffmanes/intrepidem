import React from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"
import styled from 'styled-components'
import StyledLink from '../components/Link'

const Container = styled.header`
  background: black;
  @media (max-width: 673px) {
    min-height: 20vh;
  }
`;

const Menu = styled.nav`
  float: right;
  list-style: none;
  @media (max-width: 480px) {
    float: none;
    display: flex;
    justify-content: center;
  }
`;

const MenuItem = styled.li`
  display: inline-block;
  text-transform: uppercase;
  color: white;
  text-align: center;
  margin-right: 1rem;
  margin-left: 1rem;
`;

const Logo = styled.h1`
  margin: 0;
  display: inline-block;
  @media (max-width: 480px) {
    width: 100%;
    text-align: center;
    margin-bottom: 1rem;
  }
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
        {/* <MenuItem><StyledLink to='/about'>About me</StyledLink></MenuItem> */}
        <MenuItem><StyledLink to='/projects'>Projects</StyledLink></MenuItem>
        <MenuItem><StyledLink to='/writing'>Writing</StyledLink></MenuItem>
        <MenuItem><StyledLink to='/contact'>Contact</StyledLink></MenuItem>
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
