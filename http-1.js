const http = require('http')

const server = http.createServer((req, res) => {

    if (req.url === '/') {
        res.end('This is Home')
    }
    if (req.url === '/about') {
        res.end('this is About')
    }
    res.end('opps')
})

server.listen(5000)