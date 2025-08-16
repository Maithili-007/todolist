import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import TodoItems from "./components/TodoItems";
import WelcomeMessage from "./components/WelcomeMessage";
import { useEffect, useState } from "react";
import {
  addItemToServer,
  deleteItemFromServer,
  getItemsFromServer,
  toggleItemCompletionOnServer,
  updateItemOnServer,
} from "./services/itemsService";

export default function App() {
  const [todoItems, setTodoItems] = useState([]);

  useEffect(() => {
    getItemsFromServer().then((initialItems) => {
      const itemsWithCompletedStatus = initialItems.map((item) => ({
        ...item,
        completed: item.completed || false,
      }));
      setTodoItems(itemsWithCompletedStatus);
    });
  }, []);

  const handleNewItem = async (itemName, itemDueDate) => {
    const item = await addItemToServer(itemName, itemDueDate);
    const newItem = { ...item, completed: false };
    setTodoItems([...todoItems, newItem]);
  };

  const handleToggleComplete = async (id, currentlyCompleted) => {
    const updatedItem = await toggleItemCompletionOnServer(
      id,
      !currentlyCompleted
    );
    const updatedItems = todoItems.map((item) =>
      item._id === id ? { ...item, completed: updatedItem.completed } : item
    );
    setTodoItems(updatedItems);
  };

  const handleDeleteItem = async (id) => {
    const deletedId = await deleteItemFromServer(id);
    setTodoItems(todoItems.filter((item) => item._id !== deletedId));
  };

  const handleEditItem = async (id, newTask, newDate) => {
    const updatedItem = await updateItemOnServer(id, newTask, newDate);
    const updatedItems = todoItems.map((item) =>
      item._id === id ? { ...updatedItem } : item
    );
    setTodoItems(updatedItems);
  };

  const sortedItems = [...todoItems].sort((a, b) => {
    if (a.completed === b.completed) return 0;
    return a.completed ? 1 : -1;
  });

  return (
    <div className="app">
      <AppName />
      <AddTodo onNewItem={handleNewItem} />
      {sortedItems.length === 0 ? (
        <WelcomeMessage />
      ) : (
        <TodoItems
          todoItems={sortedItems}
          onDeleteClick={handleDeleteItem}
          onToggleComplete={handleToggleComplete}
          onEditItem={handleEditItem}
        />
      )}
    </div>
  );
}
