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
    <div className="add-todo">
      <input
        type="text"
        placeholder="Enter task..."
        value={todoName}
        onChange={handleNameChange}
      />
      <input type="date" value={dueDate} onChange={handleDateChange} />
      <button onClick={handleAddButtonClicked}>Add</button>
    </div>
  );
}

export default AddTodo;
