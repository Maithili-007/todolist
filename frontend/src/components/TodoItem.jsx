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
    <div
      className={`flex items-center bg-white shadow rounded-md p-3 mb-3 ${
        completed ? "opacity-70" : ""
      }`}
    >
      <input
        type="checkbox"
        checked={completed}
        onChange={() => onToggleComplete(id, completed)}
        className="w-5 h-5 text-blue-600 rounded focus:ring-2 focus:ring-blue-400 cursor-pointer"
      />

      {isEditing ? (
        <div className="flex flex-1 items-center gap-3 ml-3">
          <input
            type="text"
            value={editedName}
            onChange={(e) => setEditedName(e.target.value)}
            className="flex-1 rounded-md border border-gray-300 px-3 py-1 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <input
            type="date"
            value={editedDate || ""}
            onChange={(e) => setEditedDate(e.target.value)}
            className="rounded-md border border-gray-300 px-3 py-1 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <button
            onClick={handleSave}
            className="bg-green-500 text-white px-4 py-1 rounded-md hover:bg-green-600 transition"
          >
            Save
          </button>
          <button
            onClick={() => setIsEditing(false)}
            className="bg-gray-300 px-3 py-1 rounded-md hover:bg-gray-400 transition"
          >
            Cancel
          </button>
        </div>
      ) : (
        <>
          <span
            className={`flex-1 ml-3 text-gray-900 ${
              completed ? "line-through text-gray-400" : ""
            }`}
          >
            {todoName}
          </span>
          {todoDate && (
            <span
              className={`mr-3 text-sm ${
                completed ? "line-through text-gray-400" : "text-gray-500"
              }`}
            >
              ({formatDate(todoDate)})
            </span>
          )}
          <button
            onClick={() => setIsEditing(true)}
            className="text-blue-600 hover:underline px-3"
          >
            Edit
          </button>
          <button
            onClick={() => onDeleteClick(id)}
            className="text-red-600 hover:underline px-3"
          >
            Delete
          </button>
        </>
      )}
    </div>
  );
}

export default TodoItem;
