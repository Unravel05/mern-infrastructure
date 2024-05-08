import CreateNote from "../../components/CreateNote/CreateNote";
import React, { useEffect, useState } from "react";
import * as notes  from '../../utilities/notes-api'
import './NotesPage.css'

function NotesPage() {
  const [notes, setNotes] = useState([]);

  const addNote = (notes) => {
      setNotes(prevNotes => [...prevNotes, notes]);
  };

  return (
      <div>
          <h1>My Notes</h1>
          <CreateNote onAddNote={addNote} />
          <div className="notes-container">
              {notes.map((note, index) => (
                  <div key={index} className="note">
                      <p>{note.text}</p>
                      <small>Created at: {note.timestamp ? note.timestamp.toLocaleString() : 'Timestamp unavailable'}</small>
                  </div>
              ))}
          </div>
      </div>
  );
}

export default NotesPage;
