import React, {useEffect, useState} from 'react';
import axios from "axios";

function ListNotes(props) {

    let [notes, setNotes] = useState([12]);

    useEffect(() => {
        let config = {
          method: 'get',
          maxBodyLength: Infinity,
          url: 'http://127.0.0.1:8000/notes/notes/',
          headers: {  }
        };

        axios.request(config)
        .then((response) => {
            setNotes(response.data);
          console.log(JSON.stringify(response.data));
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
                    <div key={note.id}>{note.title}</div>
                ))
            }
        </div>
    );
}

export default ListNotes;