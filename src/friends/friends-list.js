import React from 'react';
export default class FriendsList extends React.Component {
	constructor (props) {
		super();
		this.props = props;
	}

	render () {
		return (
			<ul>
				{
					this.props.friends.filter(friend => {
						if (friend.name.indexOf(this.props.filter) >= 0) {
							return true;
						}
					}).map(friend => {
						return (
							<li key={friend.id}>{friend.name}</li>
						)
					})
				}
			</ul>
		)
	}

}