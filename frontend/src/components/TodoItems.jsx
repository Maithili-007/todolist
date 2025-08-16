import TodoItem from "./TodoItem";

const TodoItems = ({
  todoItems,
  onDeleteClick,
  onToggleComplete,
  onEditItem,
}) => {
  const pendingItems = todoItems.filter((item) => !item.completed);
  const completedItems = todoItems.filter((item) => item.completed);

  return (
    <div className="todo-list">
      <h3>Pending</h3>
      {pendingItems.map((item) => (
        <TodoItem
          key={item._id}
          id={item._id}
          todoName={item.task}
          todoDate={item.date}
          completed={item.completed}
          onDeleteClick={onDeleteClick}
          onToggleComplete={onToggleComplete}
          onEditItem={onEditItem}
        />
      ))}

      <h3>Completed</h3>
      {completedItems.map((item) => (
        <TodoItem
          key={item._id}
          id={item._id}
          todoName={item.task}
          todoDate={item.date}
          completed={item.completed}
          onDeleteClick={onDeleteClick}
          onToggleComplete={onToggleComplete}
          onEditItem={onEditItem}
        />
      ))}
    </div>
  );
};

export default TodoItems;
