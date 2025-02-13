import axios from "axios";
import { useEffect, useState } from "react";

function UsersList(){
    const [users, setUsers] = useState([]);
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchUsers = async() => {
            try{
                const result = await axios.get("https://jsonplaceholder.typicode.com/users");
                const usersData = result.data;
                setUsers(usersData);
            }catch(error){
                setError("Error in loading data");
            }finally{
                setLoading(false);
            }
        };

        fetchUsers();
    }, []);


    if(loading) return <p>Loading Data...</p>
    if(error) return <p>{error}</p>

    
    return (
        <div>
            <h2>Users List</h2>
            <ul>
                {users.map((user) => (
                      <li key={user.id}>
                        name: {user.name}, email: {user.email}, phone number: {user.phone} 
                        </li>
                ))}
            </ul>
            <hr></hr>
        </div>
    )
    
}

export default UsersList;