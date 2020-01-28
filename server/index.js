const express = require('express')
const mongoose = require('mongoose')

const app = express()
var port = 5000

mongoose.connect('mongodb+srv://root:123@cluster0-rseib.mongodb.net/test?retryWrites=true&w=majority' , {
    useNewUrlParser: true,
    useUnifiedTopology: true 
})

app.use(express.json());

app.listen(port, ()=> {console.log(`Server on ${port}`)});