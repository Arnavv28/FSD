import http from "http";

const server = http.createServer((req,res) =>{
    res.writeHead(404,{
        'content-type':"text/plain",
    });
    res.end("<h1>welcome to Server</h1>");
});

server.listen(4444, ()=>console.log("server is running"));