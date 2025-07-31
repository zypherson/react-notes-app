/* eslint-disable no-unused-vars */
import { useState } from "react";
import { useEffect } from "react";
import NoteInput from "../components/NoteInput";

function App() {
  const [searchTerm, setSearchTerm] = useState('');

  const [notes, setNotes] = useState(() => {
    const storedNotes = localStorage.getItem('notes');
    return storedNotes ? JSON.parse(storedNotes) : [];

  });
const filteredNotes = notes.filter(note =>
  note.text.toLowerCase().includes(searchTerm.toLowerCase())
);
  useEffect(() => {
    localStorage.setItem('notes', JSON.stringify(notes));
  }, [notes]);
  
  
  const handleAddNote = (note) => {
    setNotes((prev) => [note, ...prev]);
  };

  const togglePin = (id) => {
  setNotes((prevNotes) =>
    prevNotes.map((note) =>
      note.id === id ? { ...note, pinned: !note.pinned } : note
    )
  );
};

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4">
      <div className="max-w-xl mx-auto bg-white p-6 rounded-xl shadow-lg">
        <h1 className="text-3xl font-bold mb-6 text-center text-blue-700">📝 Notes App</h1>
        <NoteInput onAddNote={handleAddNote} />
    <div className="flex justify-end mb-4">
    <button
      onClick={() => setNotes([])}
      className="text-sm text-red-500 hover:underline"
     >
     Clear All Notes
    </button>
    </div>

    <input
        type="text"
        placeholder="Search notes..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="w-full p-2 border rounded mb-4 dark:bg-gray-800 dark:text-white"
    />
    {notes.length === 0 ? (
  <p className="text-gray-500 italic text-center">No notes yet. Add one above!</p>
) : (
  <div className="space-y-4 mt-6">
    {filteredNotes
      .sort((a, b) => (b.pinned ? 1 : 0) - (a.pinned ? 1 : 0))
      .map((note) => (
        <div
          key={note.id}
          className={`p-4 rounded-lg shadow border ${
            note.pinned ? 'border-yellow-400 bg-yellow-50' : 'border-gray-200 bg-gradient-to-br from-white to-gray-50'
          }`}
        >
          <div className="flex justify-between items-center mb-2">
            <h2 className="text-xl font-semibold text-gray-800">{note.title}</h2>
            <button
              onClick={() => togglePin(note.id)}
              className="text-sm text-blue-500 hover:underline"
            >
              {note.pinned ? 'Unpin' : 'Pin'}
            </button>
          </div>
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
