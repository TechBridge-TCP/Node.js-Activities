const http = require("http");

const port1 = 8080;
const port2 = 8081;

function httpRequest1(request, response){
    response.end("Server 1 did some cool stuff");
}


function httpRequest2(request2, response2){
    response2.end("Server 2 did some cool stuff");
}

const server1 = http.createServer(httpRequest1);
const server2 = http.createServer(httpRequest2);

server1.listen(port1,function(){
    console.log(`Server is running on port ${port1}`)
})

server2.listen(port2,function(){
    console.log(`Server is running on port ${port2}`)
})