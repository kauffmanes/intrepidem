import React from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'

const StyledFooter = styled.footer`
	background: black;
	color: white;
	padding: 2rem;
	min-height: 10vh;
`

const Icons = styled.div`
	float: right;
	@media (max-width: 480px) {
		float: none;
		display: flex;
		justify-content: center;
  }
`

const Icon = styled.p`
  display: inline-block;
  margin-left: 1rem;
  margin-right: 1rem;
	color: white;
`

const Copyright = styled.p`
	display: inline-block;
	@media (max-width: 480px) {
			width: 100%;
			text-align: center;
		}
	`

const Footer = () => (
    <StyledFooter>
        <Copyright>© {new Date().getFullYear()}, Emily Kauffman</Copyright>
        <Icons>
						<Icon><a href="https://twitter.com/intrepid_em" target="_blank"><FontAwesomeIcon size="lg" color="white" icon={faTwitter} /></a></Icon>
						<Icon><a href="https://github.com/kauffmanes" target="_blank"><FontAwesomeIcon size="lg" color="white" icon={faGithub} /></a></Icon>
						<Icon><a href="https://www.linkedin.com/in/intrepidem/" target="_blank"><FontAwesomeIcon size="lg" color="white" icon={faLinkedin} /></a></Icon>
        </Icons>
    </StyledFooter>
)

export default Footer