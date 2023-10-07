const express = require("express")
const morgan = require("morgan")
const logger = require("./logger")
const authorize = require("./authorize")

const app = express()

app.use(authorize)
app.use(morgan('tiny'))

app.get("/", (req,res)=> {
    res.status(200).send("Home")
})

app.get("/about",logger,(req,res)=> {
    res.send("About")
})

app.listen(5000, ()=> {
    console.log("server listening on port 5000...")
})