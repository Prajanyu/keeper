import React, {useState} from "react";

function CreateArea(props) {

  const [note, setNote] = useState({
    title: "", 
    content: ""
  });

  function handleChange(event) {
    const {name, value} = event.target;
    setNote((prevNote) => {
      return {
        ...prevNote,
        [name]: value
      }
    })
  }

  function handleClick(event) {
    props.addNote(note);
    event.preventDefault();
  }

  return (
    <div>
      <form>
        <input name="title" value={note.title} placeholder="Title" onChange={handleChange}/>
        <textarea name="content" value={note.content} placeholder="Take a note..." rows="3" onChange={handleChange} />
        <button onClick={handleClick}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
