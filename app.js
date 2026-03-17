const http = require("http")

const server = http.createServer((req, res) => {
    console.log("server created")
    res.setHeader("Content-Type", "text/html")
    if (req.url === "/") {
        res.statusCode=200
    res.end("<h1>Hello </h1>")
    
    } else {
        res.statusCode = 200
        if (req.url === "/pizza") {
        res.end("<h1>This is your pizza</h1>")
        } else {
            res.statusCode = 404
        res.end("<h1>page not found</h1>")
        }
    }
    console.log(res.statusCode)
})

const  PORT = 8000
server.listen(PORT,()=>console.log(`Server is running ${PORT}`))