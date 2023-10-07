const { writeFileSync, readFileSync } = require("fs")
const http = require("http")

const homePage = readFileSync("./navbar-app/index.html")
const about = readFileSync("./about.html")


const server = http.createServer((req, res) => {
    console.log(req.url);
    if(req.url ==="/") {
        res.writeHead(200, {"content-type":"text/html"})
        res.write(homePage)        
        res.end()
    }
    else if(req.url ==="/about") {
        res.writeHead(200, {"content-type":"text/html"})
        res.write(about)
        res.end()
    }
    else {
        res.writeHead(404, {"content-type":"text/html"})
        res.write("Page not found!")
        res.end()
    }
})

server.listen(5000)