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
    if (!dateString) return "Due today";
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  };

  const handleSave = () => {
    if (!editedName.trim()) return;
    onEditItem(id, editedName, editedDate);
    setIsEditing(false);
  };

  return (
    <div
      className={`flex items-center justify-between rounded-xl shadow-sm mb-4 px-4 py-3 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 ${
        completed ? "opacity-70" : ""
      }`}
    >
      {isEditing ? (
        <div className="flex-1 flex flex-col sm:flex-row gap-2">
          <input
            type="text"
            value={editedName}
            onChange={(e) => setEditedName(e.target.value)}
            className="flex-1 rounded-lg border px-3 py-1 bg-gray-50 dark:bg-gray-900 border-gray-300 dark:border-gray-700"
          />
          <input
            type="date"
            value={editedDate || ""}
            onChange={(e) => setEditedDate(e.target.value)}
            className="rounded-lg border px-3 py-1 bg-gray-50 dark:bg-gray-900 border-gray-300 dark:border-gray-700"
          />
          <button
            onClick={handleSave}
            className="text-green-600 hover:text-green-800 px-2 font-semibold"
          >
            Save
          </button>
          <button
            onClick={() => setIsEditing(false)}
            className="text-gray-400 hover:text-gray-600 px-2 font-semibold"
          >
            Cancel
          </button>
        </div>
      ) : (
        <>
          <div className="flex items-center flex-1 gap-3">
            {/* Check input */}
            <input
              type="checkbox"
              checked={completed}
              onChange={() => onToggleComplete(id, completed)}
              className="form-checkbox w-5 h-5 rounded-full accent-blue-600"
            />
            {/* Task text */}
            <span
              className={`flex-1 font-medium ${
                completed
                  ? "text-green-600 line-through"
                  : "text-gray-800 dark:text-gray-200"
              }`}
            >
              {todoName}
            </span>
          </div>
          {/* Right date side */}
          <div className="flex items-center min-w-[120px] text-sm gap-1 text-gray-400">
            <svg width="16" height="16" fill="none">
              <rect
                x="4"
                y="7"
                width="8"
                height="5"
                rx="2"
                fill="currentColor"
              />
              <rect
                x="4"
                y="3"
                width="8"
                height="2"
                rx="1"
                fill="currentColor"
              />
            </svg>
            {formatDate(todoDate)}
          </div>
          <button
            onClick={() => setIsEditing(true)}
            className="ml-3 text-blue-600 dark:text-blue-400 hover:underline text-sm"
          >
            EDIT
          </button>
          <button
            onClick={() => onDeleteClick(id)}
            className="ml-2 text-red-500 dark:text-red-400 hover:underline text-sm"
          >
            DELETE
          </button>
        </>
      )}
    </div>
  );
}

export default TodoItem;
