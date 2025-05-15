const express = require("express");
const { getTasks, getTasksById, createTask, updateTaskById, deleteTaskById } = require("../controllers/controllers");
const Router = express.Router();

Router.get("/",(req,res)=>{
    res.send("Home Page")
})

Router.get("/tasks",getTasks);
Router.get("/tasks/:id",getTasksById);
Router.post("/tasks",createTask);
Router.put("/tasks/:id",updateTaskById);
Router.delete("/tasks/:id",deleteTaskById);

module.exports = {
    Router
}