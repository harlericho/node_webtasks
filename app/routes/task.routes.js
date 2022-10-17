const express = require("express");
const router = express.Router();
const task = require("../controllers/task.controller");

router.get("/api/tasks", task.getAllTasks);
router.get("/api/tasks/:id", task.getTask);
router.post("/api/tasks", task.createTask);
router.put("/api/tasks/:id", task.updateTask);
router.delete("/api/tasks/:id", task.deleteTask);

module.exports = router;
