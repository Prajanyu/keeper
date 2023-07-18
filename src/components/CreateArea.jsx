import React, { useState } from "react";
import AddIcon from '@mui/icons-material/Add';
import Fab from '@mui/material/Fab';
import Zoom from '@mui/material/Zoom';
import Grow from '@mui/material/Grow';

function CreateArea(props) {
  const [note, setNote] = useState({
    title: "",
    content: ""
  });

  const [focus, setFocus] = useState(false);

  function handleChange(event) {
    const { name, value } = event.target;

    setNote(prevNote => {
      return {
        ...prevNote,
        [name]: value
      };
    });
  }

  function submitNote(event) {
    props.onAdd(note);
    setNote({
      title: "",
      content: ""
    });
    event.preventDefault();
  }

  function handleFocus() {
    setFocus(true);
  }

  return (
    <div>
      <form className="create-note">
        {focus && <Grow in={true}><input
          name="title"
          onChange={handleChange}
          value={note.title}
          placeholder="Title"
          required
        /></Grow>}

        <Grow in={true}><textarea
          name="content"
          onChange={handleChange}
          value={note.content}
          placeholder="Take a note..."
          rows={focus ? 3 : 1}
          required
          onFocus={handleFocus}
        /></Grow>

        {focus && <Zoom in={true}>
          <Fab onClick={submitNote}>
            <AddIcon />
          </Fab>
        </Zoom>}

      </form>
    </div>
  );
}

export default CreateArea;
