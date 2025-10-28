
import { Navigate, useNavigate } from 'react-router';
import { useLoaderData } from 'react-router';

const UpdateUser = () => {
    const user = useLoaderData()
    const navigate = useNavigate();
console.log('====================================');
console.log(user);
console.log('====================================');
    const handleUpdate = (e) => {  
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const updatedUser = { name, email };
        
        fetch(`http://localhost:3000/users/${user._id}`, {
            method: 'PUT',
            headers:{
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedUser)

        })
        .then(res => res.json())
        .then(data => {
            if(data.modifiedCount){
                alert('User updated successfully');
                e.target.reset(); 
                navigate('/');

            }
        })


     

     }

    
    return (
        <div>
            <h1>Update User</h1>
            <form onSubmit={handleUpdate}>
                <input type="text" name="name" defaultValue={user.name} />
                <br />
                <input type="email" name="email" defaultValue={user.email} />
                <br />
                <button type="submit">Update User</button>
            </form>
        </div>
    );
};

export default UpdateUser;