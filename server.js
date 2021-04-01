const express = require('express')
const app = express()
const mongoose = require('mongoose')
const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({extended: true}))

mongoose.connect('mongodb+srv://bradt1234:bradt1234@cluster0.iryaf.mongodb.net/storybooks?retryWrites=true&w=majority', { useUnifiedTopology: true })

// create a data schema
const notesSchema = {
    title: String,
    content: String
    }

const Note = mongoose.model('Note', notesSchema)

app.get('/', function(req,res){
    res.sendFile(__dirname + '/index.html')
})

// app.post
app.post('/', function(req, res) {
    let newNote = new Note({
        title: req.body.title,
        content: req.body.content
    })
    newNote.save()
    res.redirect('/')
})
app.listen(3000, function() {
    console.log('Server in running on 3000')
})