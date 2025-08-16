import { useState } from "react";

function AddTodo({ onNewItem }) {
  const [todoName, setTodoName] = useState("");
  const [dueDate, setDueDate] = useState("");

  const handleNameChange = (e) => setTodoName(e.target.value);
  const handleDateChange = (e) => setDueDate(e.target.value);

  const handleAddButtonClicked = () => {
    if (!todoName.trim()) return;
    onNewItem(todoName, dueDate);
    setDueDate("");
    setTodoName("");
  };

  return (
    <div className="flex items-center gap-4 mb-7 px-2">
      <input
        type="text"
        placeholder="Add Item"
        value={todoName}
        onChange={handleNameChange}
        className="flex-1 rounded-lg px-4 py-2 border border-gray-300 dark:border-gray-700 text-gray-800 dark:text-gray-200 bg-white dark:bg-gray-800 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
      />
      <input
        type="date"
        value={dueDate}
        onChange={handleDateChange}
        className="rounded-lg px-3 py-2 border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200"
      />
      <button
        onClick={handleAddButtonClicked}
        className="bg-blue-600 text-white rounded-full w-10 h-10 flex items-center justify-center shadow-lg hover:bg-blue-700"
        aria-label="Add"
      >
        <span className="text-xl font-bold">+</span>
      </button>
    </div>
  );
}

export default AddTodo;
