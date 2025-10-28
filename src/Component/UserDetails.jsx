// import React, { use } from 'react';
import { useLoaderData } from 'react-router-dom';


const UserDetails = () => {
    const user = useLoaderData()
    console.log(user);
    
    return (
        <div>
            <h2>User Details Page</h2>
            <h2>{user.name}</h2>
            <p>{user.email}</p>
        </div>
    );
};

export default UserDetails;