const express = require('express')
const app = express()
const path = require('path')
const router = express.Router()

app.use(express.static('public'))
app.get('/movie/:id',function(req,res){
    console.log(req.params.id)
    res.sendFile(path.join(__dirname+'/public/movie.html'))
});
router.get('/',function(req,res){
    res.sendFile(path.join(__dirname+'/index.html'))
});
app.listen(process.env.PORT || 3000, () => console.log("server is now running."))