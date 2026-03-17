const http = require("http")

const server = http.createServer((req, res) => {
    console.log("server created")
    res.setHeader("Content-Type", "text/html")
    let url = req.url;
    
    if (url === "/") {
       
        res.end("<form><label>Name :</label> <input type='text' name='input'/> <button>Add</button></form > ")
    
    } else {
        res.statusCode = 200
        if (url === "/pizza") {
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