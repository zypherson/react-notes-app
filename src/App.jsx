import { useState } from "react";
import NoteInput from "../components/NoteInput";

function App() {
  const [notes, setNotes] = useState([]);

  const handleAddNote = (note) => {
    setNotes((prev) => [note, ...prev]);
  };

  return (
    <div className="max-w-xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">📝 Notes App</h1>
      <NoteInput onAddNote={handleAddNote} />

      <div className="space-y-4">
        {notes.map((note) => (
          <div
            key={note.id}
            className="bg-white p-4 rounded shadow border border-gray-200"
          >
            <h2 className="text-xl font-semibold">{note.title}</h2>
            <p>{note.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
