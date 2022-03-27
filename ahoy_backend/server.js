const http = require('http')

const data = {name:"aaa"}
let app = http.createServer((req, res) => {
    // Set a response type of plain text for the response
    console.log("someone come")
    res.writeHead(200, {'Content-Type': 'text/plain; charset=UTF-8'});

    res.write(JSON.stringify(data))
    // Send back a response and end the connection
    res.end()
});

// Start the server on port 3000
app.listen(4000, '127.0.0.1')
console.log('Node server running on port 4000')