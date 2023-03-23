const dbTasks = require("../db/dbTasks");
const { createId, findById, deleteById } = require("../helpers/db-helpers");

exports.getTasks = async (req, res) => {
  try {
    const tasks = await dbTasks;
    res.status(200).send(tasks);
  } catch (err) {
    res.status(400).send(err);
  }
};

exports.addTask = async (req, res) => {
  try {
    const { task, state, priority } = req.body;
    if (!task) {
      res.status(500).send("Task name must not be empty");
    }
    const tasks = await dbTasks;
    const id = createId(tasks);
    const newTask = { id, task, state: state ?? "not-started", priority: priority ?? "low" };
    tasks.push(newTask);
    res.status(201).send(newTask);
  } catch (err) {
    res.status(500).send(err);
  }
};

exports.getTaskById = async (req, res) => {
  try {
    const { id } = req.params;
    const tasks = await dbTasks;
    const currentTask = findById(tasks, id);
    if (!currentTask) {
      res.status(404).send("Task not found");
    }
    res.status(200).send(currentTask);
  } catch (err) {
    res.status(500).send(err);
  }
};

exports.updateTaskById = async (req, res) => {
  try {
    const { id } = req.params;
    const tasks = await dbTasks;
    const currentTask = findById(tasks, id);
    if (!currentTask) {
      res.status(404).send("Task not found");
    }
    const { task, priority, state } = req.body;
    currentTask.task = task;
    currentTask.priority = priority ?? "low";
    currentTask.state = state ?? "not-started";

    res.status(201).send(currentTask);
  } catch (err) {
    res.status(500).send(err);
  }
};

exports.deleteTaskById = async (req, res) => {
  try {
    const { id } = req.params;
    const tasks = await dbTasks;
    const currentTask = findById(tasks, id);
    if (!currentTask) {
      res.status(404).send("Task not found");
    }
    const updatedTasks = deleteById(tasks, id);
    res.status(204).send(updatedTasks);
  } catch (err) {
    res.status(500).send(err);
  }
};
