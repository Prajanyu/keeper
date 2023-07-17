import React, {useState} from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [notes, setNotes] = useState([]);

  function addNote(newNote) {
    setNotes((prevNotes) => {
      return [...prevNotes, newNote];
    })
    // console.log(notes);
  }

  return (
    <div>
      <Header />
      <CreateArea addNote={addNote} />
      {notes.map((item) => {
        return <Note key={1} title={item.title} content={item.content} />
      })};
      <Footer />
    </div>
  );
}

export default App;
