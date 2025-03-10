import {useEffect, useState} from "react";


function ListPosts(props) {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/posts")
            .then(response => response.json())
            .then(data =>setPosts(data))
    }, []);


    return (
        <div>
            {
                posts.map(post => (
                    <div key={post.id}>
                        <h1>{post.title}</h1>
                        <p>{post.body}</p>
                    </div>
                ))
            }
        </div>
    )
}

export default ListPosts;