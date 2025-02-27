import React, {useState} from 'react';
import axios from "axios";

function CreateNote(props) {

    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [user, setUser] = useState('');

    function handleTitleChange(e) {
        setTitle(e.target.value);
    }

    function handleContentChange(e) {
        setContent(e.target.value);
    }

    function handleUserChange(e) {
        setUser(e.target.value);
    }

    function createNote() {
        let notes = {
            'title': title,
            'content': content,
            'user': user
        };

        let config = {
            method: 'post',
            maxBodyLength: Infinity,
            url: 'http://127.0.0.1:8000/notes/notes/',
            headers: {
                'Content-Type': 'application/json'
            },
            data: notes
        };

        axios.request(config)
            .then((response) => {
                console.log(JSON.stringify(response.data));
            })
            .catch((error) => {
                console.log(error);
            });

    }


    return (
        <div>
            <h1>Create Notes</h1>
            <p>Title :
                <input placeholder="Title" value={title} onChange={handleTitleChange}/>
            </p>
            <p>
                <textarea value={content} onChange={handleContentChange}/>
            </p>
            <button onClick={createNote}>Create
            </button>
        </div>
    );
}

export default CreateNote;