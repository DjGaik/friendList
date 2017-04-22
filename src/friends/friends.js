import React from 'react';
import FriendsList from './friends-list';
import FriendsFilter from './friends-filter';
import FriendsForm from './friends-form';

var friends = [
	{
		name: 'Lorem ipsum.',
		id: 'f4ce4a37'
	},{
		name: 'Repellat, sit.',
		id: '711dc84d'
	},{
		name: 'Necessitatibus, quibusdam.',
		id: '2e4e18a7'
	},{
		name: 'Minus, earum.',
		id: '0b7dc2b6'
	},{
		name: 'Laboriosam, sed.',
		id: '0df4554c'
	},{
		name: 'Dicta, tenetur.',
		id: 'ab3b1c62'
	},{
		name: 'Omnis, ex!',
		id: '47b8ee2b'
	},{
		name: 'Repellendus, dolorem?',
		id: 'dd79101d'
	},{
		name: 'Error, unde?',
		id: 'b210d4ab'
	},{
		name: 'Nobis, delectus.',
		id: 'fd4d0d9d'
	},{
		name: 'User, sed.',
		id: 'fd21cbd4'
	}
];


export default class Friends extends React.Component {
	constructor () {
		super();
		this.state = {
			filter: '',
			friends: friends
		};
		this.reverse = this.reverse.bind(this);
		this.filter = this.filter.bind(this);
		this.addFriend = this.addFriend.bind(this);
		this.filter = this.filter.bind(this);
	}
	reverse () {
		this.setState({
			friends: this.state.friends.reverse()
		});
	}
	filter (value) {
		this.setState({
			filter: value
		});
	}
	addFriend (name) {
		var newFriend = {
				name: name,
				id: Math.random().toString(36).substring(7)
			};
		this.state.friends.unshift(newFriend);
		this.setState({
			friends: this.state.friends
		});
	}
	render () {
		return (
			<div className="main-container">
				<FriendsForm addFriend={this.addFriend} />
				<br />
				<FriendsFilter onFilter={this.filter} />
				<FriendsList friends={this.state.friends} filter={this.state.filter} />
				<button onClick={this.reverse}>Reverse</button>
			</div>
		)
	}

}
