const express = require('express')
const app = express()
const pool = require('./db')

app.use(express.json())

app.get("/api/todos", async (req, res) => {
  try {
    const allTodos = await pool.query(
    "SELECT * FROM todo"
    )

    res.json(allTodos.rows)
  } catch(err) {
    console.log(err.message)
  }
})

app.get("/api/todos/:id", async (req, res) => {
  const { id } = req.params

  try {
    const todo = await pool.query(
      "SELECT * FROM todo WHERE todo_id = $1", [id]
      )

    res.json(todo.rows)
  } catch(err) {
    console.log(err.message)
  }
})

app.post("/api/todos", async (req, res) => {
  try {
    await console.log(req.body)
    const { description } = req.body
    const newTodo = await pool.query(
      "INSERT INTO todo (description) VALUES ($1) RETURNING *", [description]
    )

    res.json(newTodo)
  } catch(err) {
    console.log(err.message)
  }
})

app.put("/api/todos/:id", async (req, res) => {
  try {
    const { id } = req.params
    const { description } = req.body

    await pool.query(
      "UPDATE todo SET description = $1 WHERE todo_id = $2", 
      [description, id]
    )

    res.json("Updated")
  } catch(err) {
    console.log(err.message)
  }
})

app.listen(5000, () => {
  console.log('App listening on port 5000')
})