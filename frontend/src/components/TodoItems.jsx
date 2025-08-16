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
    <div>
      <h3 className="text-xl font-semibold text-blue-700 mb-4">Pending</h3>
      {pendingItems.length > 0 ? (
        pendingItems.map((item) => (
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
        ))
      ) : (
        <p className="text-gray-500 mb-6">No pending tasks</p>
      )}

      <h3 className="text-xl font-semibold text-blue-700 mt-8 mb-4">Completed</h3>
      {completedItems.length > 0 ? (
        completedItems.map((item) => (
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
        ))
      ) : (
        <p className="text-gray-500">No completed tasks</p>
      )}
    </div>
  );
};

export default TodoItems;
