import http from "http";

const server= http.createServer((req, res) => {
   console.log("welcome to Node Js");
   console.log(req.url);
   console.log('request method');
   console.log(req.method);

   console.log("request headers");
   console.log(req.headers);
  //  console.log("socket info");
    console.log(req.socket);

   res.end('hello');
});

const PORT = 4000;
server.listen(PORT, () => console.log("server is running"));
