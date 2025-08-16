import { useState } from "react";

function TodoItem({
  id,
  todoName,
  todoDate,
  completed,
  onDeleteClick,
  onToggleComplete,
  onEditItem,
}) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedName, setEditedName] = useState(todoName);
  const [editedDate, setEditedDate] = useState(todoDate);

  const formatDate = (dateString) => {
    if (!dateString) return "";
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  };

  const handleSave = () => {
    onEditItem(id, editedName, editedDate);
    setIsEditing(false);
  };

  return (
    <div className="todo-item">
      <input
        type="checkbox"
        checked={completed}
        onChange={() => onToggleComplete(id, completed)}
      />

      {isEditing ? (
        <>
          <input
            type="text"
            value={editedName}
            onChange={(e) => setEditedName(e.target.value)}
          />
          <input
            type="date"
            value={editedDate || ""}
            onChange={(e) => setEditedDate(e.target.value)}
          />
          <button onClick={handleSave}>Save</button>
          <button onClick={() => setIsEditing(false)}>Cancel</button>
        </>
      ) : (
        <>
          <span
            style={{ textDecoration: completed ? "line-through" : "none" }}
          >
            {todoName}
          </span>
          {todoDate && <span> ({formatDate(todoDate)})</span>}
          <button onClick={() => setIsEditing(true)}>Edit</button>
          <button onClick={() => onDeleteClick(id)}>Delete</button>
        </>
      )}
    </div>
  );
}

export default TodoItem;
