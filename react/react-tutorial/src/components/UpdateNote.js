import React, {useEffect, useState} from 'react';
import axios from "axios";
import {baseURL} from "../constraints";

function UpdateNote(props) {

    const note_id = props.note_id;
    const note_title = props.title;
    const note_content = props.content;

    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const user = 1;

    // !! note_title && setTitle(note_title);
    // !! note_content && setContent(note_content);

    useEffect(() => {
        const data = {
            'title': title,
            'content': content,
            'user': user
        };

        let config = {
            method: 'get',
            maxBodyLength: Infinity,
            url: `${baseURL}/notes/notes/${note_id}/`,
            headers: {
                'Content-Type': 'application/json'
            },
            data: data,
        };

        axios.request(config)
            .then((response) => {
                setTitle(response.data.title);
                setContent(response.data.content);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    function handleTitleChange(e) {
        setTitle(e.target.value);
    }

    function handleContentChange(e) {
        setContent(e.target.value);
    }

    function handleSubmit(e) {
        let data = JSON.stringify({
            "title": title,
            "content": content,
            "user": user
        });

        let config = {
            method: 'put',
            maxBodyLength: Infinity,
            url: 'http://localhost:8000/notes/notes/' + note_id + '/',
            headers: {
                'Content-Type': 'application/json'
            },
            data: data
        };

        axios.request(config)
            .then((response) => {
                console.log(JSON.stringify(response.data));
            })
            .catch((error) => {
                console.log(error);
            });
    }

    function handleDelete(e) {
        let config = {
            method: 'delete',
            maxBodyLength: Infinity,
            url: 'http://localhost:8000/notes/notes/' + note_id + '/',
            headers: {
                'Content-Type': 'application/json'
            }
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
            <h1>Update Note</h1>
            <input type="text" placeholder="Title" value={title} onChange={handleTitleChange}/>
            <input type="text" placeholder="Content" value={content} onChange={handleContentChange}/>
            <button onClick={handleSubmit}>Submit</button>
            <button onClick={()=>handleDelete(note_id)}>Delete</button>
        </div>
    );
}

export default UpdateNote;