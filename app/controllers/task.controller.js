const taskModel = require("../models/task.model");

const getAllTasks = (req, res) => {
  taskModel.find({}, (error, data) => {
    if (error) throw error;
    res.json(data);
  });
};

const getTask = (req, res) => {
  const id = req.params.id;
  taskModel.findById(id, (error, data) => {
    if (error) throw error;
    res.json(data);
  });
};

const createTask = (req, res) => {
  const data = new taskModel({
    title: req.body.title,
    description: req.body.description,
    autor: req.body.autor,
  });
  data.save((error, data) => {
    if (error) throw error;
    res.json({
      message: "Created task",
    });
  });
};

const updateTask = (req, res) => {
  const id = req.params.id;
  const data = {
    title: req.body.title,
    description: req.body.description,
    autor: req.body.autor,
  };
  taskModel.findByIdAndUpdate(id, data, (error, data) => {
    if (error) throw error;
    res.json({
      message: "Updated task",
    });
  });
};

const deleteTask = (req, res) => {
  const id = req.params.id;
  taskModel.findByIdAndRemove(id, (error, data) => {
    if (error) throw error;
    res.json({
      message: "Deleting task",
    });
  });
};

module.exports = {
  getAllTasks,
  getTask,
  createTask,
  updateTask,
  deleteTask,
};
