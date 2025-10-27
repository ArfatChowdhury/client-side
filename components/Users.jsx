import React, { use, useEffect, useState } from 'react';




// Simple uncontrolled form: read values directly from the submit event
function Users() {

	const [users, setUsers] = React.useState([]);

	useEffect(() => {
		fetchUsers()
	}, [])

	const fetchUsers = () => {
		fetch('http://localhost:3000/users')
			.then(res => res.json())
			.then(data => setUsers(data))
			.catch(err => console.error('Error fetching users:', err));
	}
	console.log(users);


	function handleSubmit(e) {
		e.preventDefault();
		// const form = e.target;
		const name = e.target.name.value ?? '2';
		const email = e.target.email.value ?? '2';
		const newUser = { name, email };
		console.log(newUser);


		// create user in db 
		fetch('http://localhost:3000/users', {
			method: 'POST',
			headers: {
				'content-type': 'application/json'
			},
			body: JSON.stringify(newUser)

		})
			.then(res => res.json())
			.then(data => {
				console.log('data after creating in the db', data);
				if (data.insertedId) {
					alert('User created successfully');
					e.target.reset();
					fetchUsers()
				}

			})
	}

	const handleDelete = (id) => {
		// console.log('delete user with id:', id);}
		fetch(`http://localhost:3000/users/${id}`, {
			method: 'DELETE',
		})
			.then(res => res.json())
			.then(data => {
				if(data.deletedCount){
					fetchUsers()
					// const remainingUsers = users.filter(user => user._id !== id)
					// setUsers(remainingUsers);
					console.log('data after deleting from the db', data);
				}
			})}


		return (

			<div>
				<form id="user-form" onSubmit={handleSubmit}>
					<div style={{ marginBottom: 8 }}>
						<label htmlFor="name">Name</label>
						<br />
						<input
							id="name"
							name="name"
							placeholder="Your name"
						/>
					</div>

					<div style={{ marginBottom: 8 }}>
						<label htmlFor="email">Email</label>
						<br />
						<input
							id="email"
							name="email"
							type="email"
							placeholder="you@example.com"
						/>
					</div>

					<button type="submit">Submit</button>
				</form>
				<p>Total users: {users.length}</p>
				<ul>
					{users.map(user => (
						<div key={user._id} style={{ marginBottom: 16 }}	>
							<p>{user._id}</p>
							<p>Name: {user.name}</p>
							<p>Email: {user.email}</p>
							<button onClick={() => handleDelete(user._id)}>Delete</button>
						</div>
					))}
				</ul>
			</div>
		);
	}

	export default Users;
