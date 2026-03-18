const http = require("http")
const fs = require("fs")
const {anotherFunction,requestFunction} = require("./route")


const server = http.createServer(requestFunction)

server.listen(9000, () => {
    console.log("server running")
})