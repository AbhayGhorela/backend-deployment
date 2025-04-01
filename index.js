require('dotenv').config()
const express = require('express')
const app = express()
const port = 3000

app.get('/',(req,res)=>{
    res.send("Hello Backend !!!")
})

app.get('/mes',(req,res)=>{
    res.send(`Hii i'm abhay and his is the route where you see my messages to you.`)
})

app.get('/abhay',(req,res)=>{
    res.send(`<h2>hii its me</h2><h1>Abhay</h1><p>and i'm a full stack web developer and i am from india rajasthan</p>`)
})

app.listen(process.env.PORT,()=>{
    console.log(`App listening on port ${process.env.PORT}`)
})