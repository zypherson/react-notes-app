const Note = ({ note }) => {
    return (
      <div
        className="p-4 rounded shadow"
        style={{ borderLeft: `8px solid ${note.color}`, backgroundColor: `${note.color}20` }}
      >
        <h3 className="font-bold text-lg mb-1">{note.title}</h3>
        <p>{note.text}</p>
      </div>
    );
  };
 export default note  