const express = require('express')
const app = express()
const pool = require('./db')

app.use(express.json())

app.get("/api/todos", async (req, res) => {
  const allTodos = await pool.query(
    "SELECT * FROM todo"
  )

  res.json(allTodos.rows)
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

app.listen(5000, () => {
  console.log('App listening on port 5000')
})