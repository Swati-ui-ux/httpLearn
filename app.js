const http = require("http")
const fs = require("fs")
const {fork } = require("child_process")

const {anotherFunction,requestFunction} = require("./route")
const child = fork("./file1.js")

child.send({number:40})
console.log("Computaion")
child.on("message", (data) => {
console.log("Result",data)
})

const server = http.createServer(requestFunction)


// console.log(fib(40))
console.log("done")
server.listen(9000, () => {
    console.log("server running")
})