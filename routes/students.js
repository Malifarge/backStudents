const express = require('express');
const app = express();
const students= require('./students.json')

app.get('/students',(req,res)=>{
    res.json(students)
})

app.post('/students', (req, res) => {
    const student = {
      name: req.body.name,
    }
  
    students.push(student)
  
    res.json(student)
  })

module.exports = app