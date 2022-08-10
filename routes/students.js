const express = require('express');
const app = express();
const students= []

app.get('/students',(req,res)=>{
    res.json(students)
})

app.post('/students', (req, res) => {

    const {name} = req.body

    const student = {
      name: name,
    }
    const test = students.find(student=>{
     return student.name === name
    } )

    if (!test){
      students.push(student)
      res.status(201).json(student)
    }else{
      res.status(409).send("student already exists")
    }
  })

module.exports = app