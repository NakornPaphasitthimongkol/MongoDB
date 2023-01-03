const express = require('express')
const res = require('express/lib/response')
const app = express()
const worker = require('./models/worker')

app.get('/',(req, res) => {
    res.send('Hello I am alien')
    



})

app.get('/product', function(req, res){
    res.sendFile(__dirname + '/public/product.html')
})

app.get('/about', (req,res) => {
    res.send(worker.Hello())
})

app.get('*', (req, res) => {
    res.sendFile(__dirname + '/public/Error.html')
    
})

app.listen(3000, () => {
    console.log("Start Server at Port [3000]")
})
