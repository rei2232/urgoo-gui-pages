const express = require('express')
const app = express()
const path = require('path')
const router = express.Router()
app.use(express.static('public'))
app.get('/movie/:id',function(req,res){
    res.sendFile(path.join(__dirname+'/public/movie.html'))
});
router.get('/',function(req,res){
    res.sendFile(path.join(__dirname+'/index.html'))
});
app.get('/api/movie', (req, res) => {
    res.header("Content-Type",'application/json')
    res.sendFile(path.join(__dirname + '/public/data/movie.json'))
})
app.get('/api/movie/:id', (req, res) => {
    // res.header("Content-Type",'application/json')
    // res.sendFile(path.join(__dirname + '/public/data/movie.json')
})
app.listen(process.env.PORT || 3000, () => console.log("server is now running."))