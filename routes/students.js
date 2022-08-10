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
    const test = students.find(studentbase=>{
     return studentbase.name === student.name
    } )

    console.log(test);

    if (!test){
      students.push(student)
      res.json(student)
    }else{
      res.status(409).send("student already exists")
    }
  })

module.exports = app