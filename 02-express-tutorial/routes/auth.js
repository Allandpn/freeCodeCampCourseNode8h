const express = require("express")
const router = express.Router()


router.post("/", (req,res)=> {
    const {name} = req.body
    if(name) {
        return res
            .status(200)
            .send("Welcome, " + name)
    } else {
        res.send("not provided credentials")
    }
    res.send("Post")
})

module.exports = router



