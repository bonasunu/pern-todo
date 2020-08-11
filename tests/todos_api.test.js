const supertest = require('supertest')
const pool = require('../db/db.config')
const app = require('../app')

const api = supertest(app)

test('todos are returned as JSON', async () => {
  await api
    .get('/api/todos')
    .expect(200)
    .expect('Content-Type', /application\/json/)
})

test('there are 1 todo', async () => {
  const response = await api.get('/api/todos')
  console.log(response.body)
  expect(response.body).toHaveLength(1)
})

afterAll(() => {
  pool.end()
})