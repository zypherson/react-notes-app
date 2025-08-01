import { useState } from "react";

const colors = ["#f87171", "#fbbf24", "#34d399", "#60a5fa", "#a78bfa", "#f472b6"];

const NoteInput = ({ onAddNote }) => {
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");
  const [color, setColor] = useState(colors[0])

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim() && !text.trim()) return;

    onAddNote({ title, text, id: Date.now() });
    setTitle("");
    setText("");
    setColor(colors[0]);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-2 mb-4">
      <input
        type="text"
        placeholder="Note Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
      />
      <textarea
        placeholder="Note Text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        className="w-full p-2 border rounded"
      />
      <div className="flex gap-2 mt-2">
        {colors.map((c) => (
          <button
            key={c}
            type="button"
            onClick={() => setColor(c)}
            className={`w-6 h-6 rounded-full border-2 ${color === c ? "border-black" : "border-transparent"}`}
            style={{ backgroundColor: c }}
          />
        ))}
      </div>
      <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-all duration-200 shadow"
      >
        Add Note
      </button>
    </form>
  );
};
export default NoteInput;
 