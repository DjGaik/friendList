import React from 'react';
export default class FriendsForm extends React.Component {
	constructor (props) {
		super();
		this.state = {value: ''};
		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleChange = this.handleChange.bind(this);
	}
	handleSubmit (e) {
		e.preventDefault();
		this.addFriend();
	}
	handleChange (e) {
		this.setState({value: e.target.value});
	}
	addFriend () {
		this.props.addFriend(this.state.value);
		this.setState({value: ''});
	}
	render () {
		return (
			<form onSubmit={this.handleSubmit}>
				<label>
					Add:
					<input type="text" name="name" onChange={this.handleChange} value={this.state.value} />
				</label>
				<input type="submit" value="Add" />
			</form>
		)
	}

}