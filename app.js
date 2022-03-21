const express = require('express')
const app = express ()
const port = 3000

app.get('/',(req,res) =>  {
    res.send('hello world')
})
app.get('/contacts',(req,res) =>  {
    res.send('contacts')
})
app.get('/home',(req,res) =>  {
    res.send('home')
})
app.get('/pay',(req,res) =>  {
    res.send('pay')
})

app.listen(port,() => {
    console.log('exam ple app listerning on port ${port}')
})