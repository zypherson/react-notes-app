import { useState } from "react";
import NoteInput from "../components/NoteInput";

function App() {
  const [notes, setNotes] = useState([]);

  const handleAddNote = (note) => {
    setNotes((prev) => [note, ...prev]);
  };

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4">
      <div className="max-w-xl mx-auto bg-white p-6 rounded-xl shadow-lg">
        <h1 className="text-3xl font-bold mb-6 text-center text-blue-700">📝 Notes App</h1>
        <NoteInput onAddNote={handleAddNote} />
  
        {notes.length === 0 ? (
          <p className="text-gray-500 italic text-center">No notes yet. Add one above!</p>
        ) : (
          <div className="space-y-4 mt-6">
            {notes.map((note) => (
              <div
                key={note.id}
                className="p-4 rounded-lg shadow border border-gray-200 bg-gradient-to-br from-white to-gray-50"
              >
                <h2 className="text-xl font-semibold text-gray-800">{note.title}</h2>
                <p className="text-gray-600">{note.text}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
  
}

export default App;
