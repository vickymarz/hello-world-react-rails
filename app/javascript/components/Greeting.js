import React from "react"
import PropTypes from "prop-types"
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { getGreetingList } from "../greetings/greetings"
import { List } from 'semantic-ui-react'

class Greeting extends React.Component {
	render() {
		console.log(this.props);
		const { greetings } = this.props
		let greetUsers = greetings['greetings'] 
		greetUsers = greetUsers ? greetUsers : []
		console.log(greetUsers)
		const GreetingsList = greetUsers.map(greet => {
			return (
				<List.Item>
					<List.Content>
						<List.Header>{greet.greeting}</List.Header>
					</List.Content>
				</List.Item>
			)
		})
		return (
			<>
				<h1 className='app-name'>Greetings App</h1>
				<ul className='greetings'>{GreetingsList}</ul>
				<button onClick={() => this.props.getGreetingList()}>Greet</button>
			</>
		)
	}
}

const structuredSelector = createStructuredSelector({
	greetings: state => state.greetings
})

const mapDispatchToProps = { getGreetingList }


Greeting.propTypes = {
  greeting: PropTypes.string
};

export default connect(structuredSelector, mapDispatchToProps)(Greeting);