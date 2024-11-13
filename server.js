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

app.get("employees/random", () => {
  const i = Math.floor(Math.random())*employees.length
  res.json(employees[i])
})

app.get("/employees/:id", (req, res) => {
  const {id} = req.params
  const employee = employees.find(e => e === +id)
  if (employee) {
    res.json(employees[id])
  } else {
    res.status(404).send("No Employee Found")
  }
})
