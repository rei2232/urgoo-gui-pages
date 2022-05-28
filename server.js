const express = require('express')
const path = require('path')
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
app.use(express.static('public'))
app.all('/*', (req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

// SECURITY
app.disable('x-powered-by');

app.get('/movie/:id',function(req,res){
    res.sendFile(path.join(__dirname+'/public/movie.html'))
});
router.get('/',function(req,res){
    res.sendFile(path.join(__dirname+'/index.html'))
});
app.listen(process.env.PORT || port, () => console.log("server is now running."))