import React from 'react';

// Simple uncontrolled form: read values directly from the submit event
function Users({ onSubmit }) {
	function handleSubmit(e) {
		e.preventDefault();
		const form = e.target;
		const name = form.elements?.name?.value ?? '';
		const email = form.elements?.email?.value ?? '';
		const values = { name, email };
		console.log(values);
		if (typeof onSubmit === 'function') onSubmit(values);
	}

	return (
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
	);
}

export default Users;
