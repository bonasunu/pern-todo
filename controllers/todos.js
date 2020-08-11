const todoRoutes = require('express').Router()
const pool = require('../db/db.config')

todoRoutes.get("/", async (req, res) => {
  const allTodos = await pool.query(
    "SELECT * FROM todo"
    )

  res.json(allTodos.rows)
})

todoRoutes.get("/:id", async (req, res) => {
  const { id } = req.params

  const todo = await pool.query(
    "SELECT * FROM todo WHERE todo_id = $1", [id]
    )

  res.json(todo.rows)
})

todoRoutes.post("/", async (req, res) => {
  const { description } = req.body
  const newTodo = await pool.query(
    "INSERT INTO todo (description) VALUES ($1) RETURNING *", [description]
  )

  res.json(newTodo)
})

todoRoutes.put("/:id", async (req, res) => {
  const { id } = req.params
  const { description } = req.body

  await pool.query(
    "UPDATE todo SET description = $1 WHERE todo_id = $2", 
    [description, id]
  )

  res.json("Updated!")
})

todoRoutes.delete("/:id", async (req, res) => {
  const { id } = req.params

  await pool.query(
    "DELETE FROM todo WHERE todo_id = $1",
    [id]
  )

  res.json("TODO successfully deleted!")
})

module.exports = todoRoutes