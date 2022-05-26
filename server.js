const express = require('express')
const path = require('path')
const db = require('./query')
const bodyParser = require('body-parser')
const app = express()
const port = 3000
const router = express.Router()

app.use(bodyParser.json())
app.use(
    bodyParser.urlencoded({
        extended: true,
    })
)
// app.use(express.static('public'))
// app.get('/movie/:id',function(req,res){
//     res.sendFile(path.join(__dirname+'/public/movie.html'))
// });
// router.get('/',function(req,res){
//     res.sendFile(path.join(__dirname+'/index.html'))
// });
app.post('/api/movie', db.createMovie)
app.listen(process.env.PORT || port, () => console.log("server is now running."))