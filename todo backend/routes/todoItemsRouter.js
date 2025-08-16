const express = require("express");
const todoItemsRouter = express.Router();//creates a mini Express router

// Local Module
const todoItemsController = require("../controllers/todoItemsController");

todoItemsRouter.get("/", todoItemsController.getTodoItems);
todoItemsRouter.post("/", todoItemsController.createTodoItem);
todoItemsRouter.delete("/:id", todoItemsController.deleteTodoItem);
todoItemsRouter.put("/:id/completed", todoItemsController.markCompleted);
// Uncheck a completed item
todoItemsRouter.put("/:id/uncompleted", todoItemsController.markUncompleted);

// Edit a todo item
todoItemsRouter.put("/:id", todoItemsController.updateTodoItem);


module.exports = todoItemsRouter;