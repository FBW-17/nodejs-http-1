const http = require("http")

const server = http.createServer((req, res) => {

    if(req.url === "/") {
        res.write("<h1>Homepage</h1>")
        res.write("<img src='//unsplash.it/300/300' />")
        res.write("<br />")
        res.write("<a href='/books'>Books</a>")
        return res.end()
    }
    else if(req.url === "/books") {
        res.write("<h1>Books</h1>")
        res.write("<a href='/'>Back to Home</a>")
        return res.end()
    }
    else {
        return res.end("This page does not exist")
    }
})

let port = 3000
server.listen(port, () => {
    console.log(`Server runs now on port ${port}`)
})
