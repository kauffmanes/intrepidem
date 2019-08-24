import React from "react"
import styled from 'styled-components'
import Layout from "../components/layout"
import SEO from "../components/seo"

const Container = styled.div`
  padding-top: 2rem;
  display: flex;
  max-width: 1200px;
  margin: 0 auto;
  @media (max-width: 800px) {
    padding: 2rem;
    display: block;
  }
  @media (max-width: 480px) {
    padding: 1rem;
  }
`

const Main = styled.div`
	background: white;
	color: black;
	max-width: 900px;
	padding: 4rem;
	margin: 0 auto;
`

const AboutMe = () => (
  <Layout>
    <SEO title="About me" />
    <Container>
			<Main>hi</Main>
		</Container>
  </Layout>
)

export default AboutMe