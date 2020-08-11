const express = require('express')
const app = express()
const pool = require('./db.config')
const config = require('./utils/config')
require('express-async-errors')

app.use(express.json())

app.get("/api/todos", async (req, res) => {
  const allTodos = await pool.query(
    "SELECT * FROM todo"
    )

  res.json(allTodos.rows)
})

app.get("/api/todos/:id", async (req, res) => {
  const { id } = req.params

  const todo = await pool.query(
    "SELECT * FROM todo WHERE todo_id = $1", [id]
    )

  res.json(todo.rows)
})

app.post("/api/todos", async (req, res) => {
  const { description } = req.body
  const newTodo = await pool.query(
    "INSERT INTO todo (description) VALUES ($1) RETURNING *", [description]
  )

  res.json(newTodo)
})

app.put("/api/todos/:id", async (req, res) => {
  const { id } = req.params
  const { description } = req.body

  await pool.query(
    "UPDATE todo SET description = $1 WHERE todo_id = $2", 
    [description, id]
  )

  res.json("Updated!")
})

app.delete("/api/todos/:id", async (req, res) => {
  const { id } = req.params

  await pool.query(
    "DELETE FROM todo WHERE todo_id = $1",
    [id]
  )

  res.json("TODO successfully deleted!")
})

app.listen(config.PORT, () => {
  console.log(`App listening on port ${config.PORT}`)
})