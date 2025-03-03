import React, {useEffect, useState} from 'react';
import axios from "axios";
import {baseURL} from "../constraints";

function DetailNote(props) {

    const note_id = props.note_id;
    const [note, setNote] = useState({});

    useEffect(() => {
        let config = {
            method: 'get',
            maxBodyLength: Infinity,
            url: `${baseURL}/notes/notes/${note_id}/`,
            headers: {  }
          };

          axios.request(config)
          .then((response) => {
            setNote(response.data);
            console.log(response.data);
          })
          .catch((error) => {
            console.log(error);
          });
    }, []);


    return (
        <div>
            <h2>{note.title}</h2>
            <p>{note.content}</p>
        </div>
    );
}

export default DetailNote;