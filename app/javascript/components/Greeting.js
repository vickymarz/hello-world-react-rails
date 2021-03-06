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
	
		return (
			<>
				<h1>Greetings App</h1>
				<ul>
					<List.Item>
						<List.Content>
							<List.Header>{greetUsers.greeting}</List.Header>
						</List.Content>
					</List.Item>
				</ul>
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