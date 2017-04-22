import React from 'react';
export default class FriendsFilter extends React.Component {
	constructor (props) {
		super();
		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleChange = this.handleChange.bind(this);
	}
	handleSubmit (e) {
		e.preventDefault();
	}
	handleChange (e) {
		this.props.onFilter(e.target.value);
	}
	render () {
		return (
			<form onSubmit={this.handleSubmit}>
				<label>
					Filter:
					<input type="text" name="name" onChange={this.handleChange} />
				</label>
			</form>
		)
	}

}