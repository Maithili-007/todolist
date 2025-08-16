const TodoItem = require("../models/TodoItem");

exports.createTodoItem = async (req, res, next) => {
  console.log(req.body);
  const { task, date } = req.body;
  const todoItem = new TodoItem({ task, date });
  await todoItem.save();
  res.status(201).json(todoItem);
}

exports.getTodoItems = async (req, res, next) => {
  const todoItems = await TodoItem.find();
  res.json(todoItems);
}

exports.deleteTodoItem = async (req, res, next) => {
  const { id } = req.params;
  await TodoItem.findByIdAndDelete(id);
  res.status(204).json({_id: id});
}

exports.markCompleted = async (req, res, next) => {
  const { id } = req.params;
  const todoItem = await TodoItem.findById(id);
  todoItem.completed = true;
  await todoItem.save();
  res.json(todoItem);
}

// Uncheck a completed todo item
exports.markUncompleted = async (req, res, next) => {
  const { id } = req.params;

  const todoItem = await TodoItem.findById(id);
  if (!todoItem) {
    return res.status(404).json({ message: "Todo not found" });
  }

  todoItem.completed = false;
  await todoItem.save();

  res.json(todoItem);
};

// Edit a todo item (update task or date)
exports.updateTodoItem = async (req, res, next) => {
  const { id } = req.params;
  const { task, date } = req.body;

  const todoItem = await TodoItem.findById(id);
  if (!todoItem) {
    return res.status(404).json({ message: "Todo not found" });
  }

  if (task !== undefined) todoItem.task = task;
  if (date !== undefined) todoItem.date = date;

  await todoItem.save();

  res.json(todoItem);
};
