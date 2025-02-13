import React, {useState, useEffect} from "react";
import axios from "axios"

function PostList() {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        const fetchPosts = async () => {
            try{
                const resopnse = await axios.get("https://jsonplaceholder.typicode.com/posts");
                setPosts(resopnse.data);
            } catch(error){
                setError("Error in loading data");
            } finally{
                setLoading(false);
            }
        };

        fetchPosts();
    }, []);

    if(loading) return <p>Loading data...</p>
    if(error) return <p>{error}</p>

    return (
        <div>
            <h2>Posts List</h2>
            <ul>
                {posts.map((post) => (
                    <li key={post.id}>
                        <h3>{post.title}</h3>
                        <p>{post.body}</p>
                    </li>
                ))}
            </ul>
            <hr></hr>
        </div>
    );
};

export default PostList;