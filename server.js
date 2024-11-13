// TODO: this file :)
const express = require("express")
const employees = require("./employees.js")
const app = express()
const PORT = 3000

app.get("/", (req, res) => {
  res.send("Hello Employees@")
})

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`)
})

app.get("/empoyees", (req, res) => {
  res.json(employees)
})

app.get("/employees/:id", (req, res) => {
  const {id} = req.params
  if (id < 0 || id >= employees.length) {
    res.status(404).send("No Employee Found")
  } else {
    res.json(employees[id])
  }
})

app.get("employees/random", () => {
  res.json(employees.random())
})
