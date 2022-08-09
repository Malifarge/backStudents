const express = require('express');
const app = express();
const port = 5000
const cors = require('cors')
const studentsRoutes = require('./routes/students')

// pour autoriser les front à faire des requetes
app.use(cors())

// pour autoriser les requetes à prendre des paramètre
app.use(express.json())

app.use('/',studentsRoutes)


app.listen(port,()=>{
    console.log(`Server running on ${port}`)
})