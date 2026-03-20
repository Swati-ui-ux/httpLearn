const http = require("http")
const fs = require("fs")
// const {fork } = require("child_process")
const {spawn } = require("child_process")

const {anotherFunction,requestFunction} = require("./route")
// const child = fork("./file1.js")
// child.send({number:40})
// child.on("message", (data) => {
// console.log("Result",data)
// })
const server = http.createServer(requestFunction)
console.log("Computaion")
const child = spawn("cmd",["/c","echo %cd%"])

child.stdout.on("data", (data) => {

console.log(data.toString())
})
child.stderr.on("data", (err) => {

console.log("error",err.toString())
})


child.on("close", (code) => {
console.log("Child proccess closed",code)
})


// console.log(fib(40))
// console.log("done")
server.listen(9000, () => {
    console.log("server running")
})