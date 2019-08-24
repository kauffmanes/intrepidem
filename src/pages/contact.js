import React from "react"
import styled from 'styled-components'
import Layout from "../components/layout"
import SEO from "../components/seo"

const Container = styled.div`
  display: flex;
`;

const Form = styled.div`
	flex: 1;
	background: rgba(0,0,0,.7);
	color: white;
	width: 50vw;
	padding: 4rem;
	button[type=submit] {
		width: 100%;
		padding: 1rem;
		background: hotpink;
		color: white;
	}
`

const Label = styled.label`
	display: block;
	margin-bottom: 1.5rem;
	width: 100%;
	input, textarea {
		display: block;
		width: 100%;
		height: 2.5rem;
		// border-radius: 5px;
		background: rgba(255,255,255,.7);
		padding: .25rem .5rem;
	}
	textarea {
		resize: none;
		height: 15vh;
	}
`

const LeftColumn = styled.div`
	color: white;
	max-width: 900px;
	padding: 4rem;
	margin: 0 auto;
	flex: 1;
	background: black;
`;

const Title = styled.h2`
  text-orientation: sideways;
  writing-mode: vertical-lr;
  font-size: 3rem;
  text-transform: uppercase;
`

class Contact extends React.Component {
	state = {
		name: "",
		email: "",
		message: ""
	}

	handleSubmit = event => {
    event.preventDefault()
    alert(`Welcome ${this.state.name}!`)
	}
	
	handleInputChange = (event) => {
		const target = event.target
		const value = target.value
		const name = target.name
		this.setState({
			[name]: value
		})
	}

	render() {
		return (
			<Layout>
				<SEO title="Contact me" />
				<Container>
					<LeftColumn>
						<Title>Contact</Title>
					</LeftColumn>
					<Form>
						<form name="contact" onSubmit={this.handleSubmit} netlify>
							<Label>
								Name
								<input value={this.state.name} onChange={this.handleInputChange} type="text" name="name" />
							</Label>
							<Label>
								Email
								<input value={this.state.email} onChange={this.handleInputChange} type="text" name="email" />
							</Label>
							<Label>
								Message
								<textarea name="name" value={this.state.message} onChange={this.handleInputChange}/>
							</Label>
							<button type="submit">Submit</button>
						</form>
					</Form>
				</Container>
			</Layout>
		);
	}
}

export default Contact
