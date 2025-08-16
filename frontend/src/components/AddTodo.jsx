import { useState } from "react";

function AddTodo({ onNewItem }) {
  const [todoName, setTodoName] = useState("");
  const [dueDate, setDueDate] = useState("");

  const handleNameChange = (event) => {
    setTodoName(event.target.value);
  };

  const handleDateChange = (event) => {
    setDueDate(event.target.value);
  };

  const handleAddButtonClicked = () => {
    if (!todoName.trim()) return;
    onNewItem(todoName, dueDate);
    setDueDate("");
    setTodoName("");
  };

   return (
    <div className="flex gap-3 mb-7">
      <input
        type="text"
        placeholder="Enter task..."
        value={todoName}
        onChange={handleNameChange}
        className="flex-1 rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400 bg-white"
      />
      <input
        type="date"
        value={dueDate}
        onChange={handleDateChange}
        className="rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400 bg-white"
      />
      <button
        onClick={handleAddButtonClicked}
        className="bg-blue-600 text-white rounded-md px-5 py-2 font-semibold shadow-md hover:bg-blue-700 transition"
      >
        Add
      </button>
    </div>
  );
}

export default AddTodo;
