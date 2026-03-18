

const fs = require("fs")
function requestFunction(req,res) {
 if (req.url === "/") {
        res.setHeader("Content-Type", "text/html")

        fs.readFile("formValues.txt", (err, data) => {
            let username = ""

            if (!err && data) {
                username = data.toString()
            }

            res.end(`
<h1>${username}</h1>

<form method="POST" action="/message">
<h1>Form</h1>
<label>Name :</label>
<input type="text" name="username"/>
<button type="submit">Add</button>
</form>
`)
        })
    } 
    
    else if (req.url === "/message" && req.method === "POST") {

        let dataChunks = []

        req.on("data", (chunk) => {
            dataChunks.push(chunk)
        })

        req.on("end", () => {
            const formData = Buffer.concat(dataChunks).toString().split("=")[1]

            fs.writeFile("formValues.txt", formData, (err) => {
                res.statusCode = 302
                res.setHeader("Location", "/")
                res.end()
                
            })
        })
    }
}
function anotherFunction(req,res) {
 console.log("Another")
}


module.exports = {requestFunction,anotherFunction}