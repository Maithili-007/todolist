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
    <div className="px-2">
      <div>
        <h3 className="uppercase tracking-wide text-xs font-semibold mb-3 text-gray-500 dark:text-gray-400">
          To Do
        </h3>
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
          <p className="text-gray-400">Nothing to do!</p>
        )}
      </div>
      <div>
        <h3 className="uppercase tracking-wide text-xs font-semibold mt-6 mb-3 text-gray-500 dark:text-gray-400">
          Completed
        </h3>
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
          <p className="text-gray-400">No completed tasks</p>
        )}
      </div>
    </div>
  );
};

export default TodoItems;
