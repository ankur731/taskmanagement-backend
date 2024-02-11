const { Router } = require("express");
// const { TaskRecord } = require("../records/task.record");
const { pool } = require("../utils/db");
const taskSchema = require("../validations/task");

const taskRouter = Router();

const table = "tasks";
taskRouter
  .get("/", async (req, res) => {
    const query = `SELECT * FROM ${table}`;
    try {
      const [results] = await pool.execute(query);
      res.json({ results });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  })
  .get("/:id", async (req, res) => {
    const { id } = req.params;
    const query = `SELECT * FROM ${table} where task_id=?`;
    try {
      const [results] = await pool.execute(query, id);
      res.json({ results });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  })
  .post("/create", async (req, res) => {
    try {
      const { task_title, task_description } = req.body;

      const parseStatus = taskSchema.safeParse({
        task_title,
        task_description,
      });

      if (!parseStatus.success) {
        // Use a 400 status code for a bad request
        return res
          .status(400)
          .json({ msg: "Invalid input", errors: parseStatus.error.errors });
      }

      // Use a parameterized query to prevent SQL injection
      const query = `INSERT INTO ${table} (task_title, task_description) VALUES (?, ?)`;
      const values = [task_title, task_description];

      // Execute the query
      await pool.execute(query, values);

      res
        .status(201)
        .json({ success: true, message: "Task created successfully" });
    } catch (error) {
      console.error("Error:", error);
      res.status(500).json({ success: false, message: "Error creating task" });
    }
  })
  .delete("/:id", async (req, res) => {
    try {
      const { id } = req.params;

      const q = `Delete from ${table} where task_id=?`;
      const values = id;

      await pool.execute(q, values);

      res
        .status(200)
        .json({ success: true, message: "Task deleted successfully" });
    } catch (error) {
      console.error("Error :", error);
      res.status(500).json({ success: false, message: "Error deleted task" });
    }
    // const todo = await TaskRecord.getOne(req.params.id);
    // await todo.delete();
  })
  .put("/:id", async (req, res) => {
    try {
      const { id } = req.params;

      const selectQuery = `SELECT task_completed FROM ${table} WHERE task_id = ?`;
      const updateQuery =
        "UPDATE tasks SET task_completed = ? WHERE task_id = ?";
      const values = id;

      // Fetch the current task_completed status
      const [result] = await pool.execute(selectQuery, values);

      if (result.length === 0) {
        return res
          .status(404)
          .json({ success: false, message: "Task not found" });
      }

      const currentStatus = result[0].task_completed;
      const newStatus = !currentStatus; // Toggle the status
      await pool.execute(updateQuery, [newStatus, values]);

      res.status(201).json({
        success: true,
        message: "Task status toggled successfully",
        newStatus,
      });
    } catch (error) {
      console.error("Error:", error);
      res
        .status(500)
        .json({ success: false, message: "Error toggling task status" });
    }
  });

module.exports = {
  taskRouter,
};
