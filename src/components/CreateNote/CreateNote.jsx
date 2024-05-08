import React, { useState } from 'react'
import './CreateNote.css'

function CreateNote({ onAddNote }) {
  const [noteText, setNoteText] = useState('');
  const [saveAttempted, setSaveAttempted] = useState(false);

  const handleChange = (event) => {
      setNoteText(event.target.value);
  };

  const handleSubmit = (event) => {
      event.preventDefault();
      if (noteText.trim()) {
          handleSave();
      } else {
          setSaveAttempted(true);
      }
  };

  const handleSave = () => {
      const noteToSave = {
          text: noteText,
          timestamp: new Date()
      };
      onAddNote(noteToSave);
      setNoteText('');
      setSaveAttempted(false);
  };

  return (
    <div className="create-note-container">
          {saveAttempted && !noteText.trim() && <p>No text entered. Please enter some text before saving.</p>}
          <form onSubmit={handleSubmit}>
              <textarea
                  className="create-note-textarea"
                  value={noteText}
                  onChange={handleChange}
                  maxLength={100}
                  placeholder='Type...'
                  >
                  </textarea>
                <button className="create-note-button" onClick={handleSubmit}>Save Note</button>
            </form>
    </div>
  );
}

export default CreateNote;
