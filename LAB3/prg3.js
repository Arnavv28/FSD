import http from "http";

const server = http.createServer((req,res)=>{
   if(req.url=='/')
    res.end('<h1>Home Page</h1>')

    else if(req.url=='/about')
    res.end('<h1>About us Page</h1>')

    else if(req.url=='/product')
    res.end(`<h1>Mobile Phone</h1>
            <h2>price; 22000</h2>
            <p>Discount: 5%</p>
            <a href='#'>Buy Now</a>        
    `);
    
    else{
        res.statusCode=404;
        res.end(`<h1>404 ,Not Found</h1>
                <p>page not found</p>
                <a href='/'>Home</a>
             `);
        }
});

server.listen(5555, ()=>console.log("server is running"));