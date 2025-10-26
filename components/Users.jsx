import React from 'react';

// Simple uncontrolled form: read values directly from the submit event
function Users() {
	function handleSubmit(e) {
		e.preventDefault();
		// const form = e.target;
		const name = e.target.name.value ?? '2';
		const email = e.target.email.value ?? '2';
		const newUser= { name, email };
		console.log(newUser);


        // create user in db 
        fetch('http://localhost:3000/users', {
            method: 'POST',
            headers:{
                'content-type': 'application/json'
            },
            body: JSON.stringify(newUser)

        })
        .then(res => res.json())
        .then(data =>{
            console.log('data after creating in the db', data);
            if(data.insertedId){
                alert('User created successfully');
                e.target.reset();
            }
            
        })
		
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
