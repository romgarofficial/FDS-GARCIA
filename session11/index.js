// Server Preparation and Creation
// Since Node.js is already installed in our device, we can require the application by declaring a variable and requiring the said module.

const http = require("http");

// Port creation
const port = 4000;

// Mock Database -> Array
let items = ["Laptop", "Phone"];

// Server creation via http/node
const app = http.createServer((request, response) => {

    // Endpoint Creation via Node Server
    // To access this endpoint we will be using localhost
    // localhost:4000/greeting
    // www.mylink.com/greeting
    if(request.url == "/greeting"){
        response.end("Hello World!");
    }else if(request.url == "/homepage"){
        response.end("Welcome to the homepage user!");
    }else if(request.url == "/about"){
        response.writeHead(200);
        response.end("This is the About Page!");
    }else if(request.url == "/items" && request.method == "GET"){
        response.writeHead(200);
        response.end(JSON.stringify(items));
    }else if(request.url == "/items/add" && request.method == "POST"){
        response.writeHead(201);
        items.push("Desktop");
        response.end("Item is now Added!");
    }else{
        response.writeHead(404);
        response.end("ERROR 404: Page not Found!");
    }

})



// Port listening
app.listen(port);

// Confirmation Message
console.log(`Server in now running at port ${port}.`);