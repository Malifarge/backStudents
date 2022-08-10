const express = require('express');
const app = express();
const students= []

app.get('/students',(req,res)=>{
    res.json(students)
})

app.get('/students/:name',(req,res)=>{
  const {name} = req.params
  const studentExiste = students.find(student=>{
    return student.name === name
   } )
   if (studentExiste){
    res.json(studentExiste)
  }else{
    res.status(404).send("Not Found")
  }
})

app.post('/students', (req, res) => {

    const {name} = req.body

    const student = {
      name: name,
    }
    const studentExiste = students.find(student=>{
     return student.name === name
    } )

    if (!studentExiste){
      students.push(student)
      res.status(201).json(student)
    }else{
      res.status(409).send("student already exists")
    }
  })

module.exports = app