import React, {useEffect, useState} from 'react';
import axios from "axios";
import DetailNote from "./DetailNote";
import UpdateNote from "./UpdateNote";
import {baseURL} from "../constraints";

function ListNotes(props) {

    let [notes, setNotes] = useState([12]);

    useEffect(() => {
        let config = {
          method: 'get',
          maxBodyLength: Infinity,
          url: `${baseURL}/notes/notes/`,
          headers: {  }
        };

        axios.request(config)
        .then((response) => {
            setNotes(response.data);
            console.log(response.data);
        })
        .catch((error) => {
          console.log(error);
        });

    }, []);

    return (
        <div>
            <h1>Notes</h1>
            {
                notes.map(note => (
                    // <DetailNote note_id = {note.id}/>
                    <UpdateNote note_id = {note.id} content={note.content} title={note.title}/>
                ))
            }
        </div>
    );
}

export default ListNotes;