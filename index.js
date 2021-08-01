const express = require('express');
const app = express();
// const bodyParser = require('body-parser');
const port = 3000;

app.use(express.static('public'))
// parse application/x-www-form-urlencoded
// app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.urlencoded({extended:false}));
app.use(express.json());
let arrayData = [];
// parse application/json
// app.use(bodyParser.json())
app.set('view engine','ejs')
app.get('/',(req,res)=>{
    // res.sendFile(__dirname +'/index.html');
    res.render('index',{arrayData:arrayData});
})
app.post('/sent',(req,res)=>{
    arrayData.push(req.body.item);
    res.send(arrayData);
})

app.listen(port,()=>{
    console.log('Server is running');
})