import React, {useState} from "react";

function CreateArea(props) {
  //decalred state to handle and save change in textboxes
  const [note, setNote] = useState({
    title: "", 
    content: ""
  });

  //function to handle change event in input
  function handleChange(event) {
    //destructure event.target
    const {name, value} = event.target;
    setNote((prevNote) => {
      return {
        ...prevNote,
        [name]: value
      }
    })
  }

  //function to handle add note button click event
  function handleClick(event) {
    props.addNote(note);
    setNote({title: "", content: ""});
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
