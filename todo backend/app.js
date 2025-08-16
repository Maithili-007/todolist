// Core Module
//const path = require('path');

// External Module
const express = require('express');
const { default: mongoose } = require('mongoose');
const cors = require('cors');
const DB_PATH = "mongodb+srv://root:root@completecoding.pxuvpxm.mongodb.net/todo?retryWrites=true&w=majority&appName=CompleteCoding";

//Local Module
const todoItemsRouter = require("./routes/todoItemsRouter")
const errors = require("./controllers/errors");

const app = express();//creates an Express application

app.use(express.urlencoded({ extended: true }));//used to parse incoming form data
app.use(express.json());// parse incoming JSON data from the request body
app.use(cors());

app.use("/api/todo", todoItemsRouter);
app.use(errors.pageNotFound);

const PORT = 3000;
mongoose.connect(DB_PATH).then(() => {
  console.log('Connected to Mongo');
  app.listen(PORT, () => {
    console.log(`Server running on address http://localhost:${PORT}`);
  });
}).catch(err => {
  console.log('Error while connecting to Mongo: ', err);
});