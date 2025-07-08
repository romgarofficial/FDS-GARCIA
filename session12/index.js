//Preparation of Express Server
const express = require("express");

// Create the server and store in a variable
const app = express();

// Port number
const port = 5000;

// Middlewares
// To converts incoming and outgoing data to JS Object
app.use(express.json());
// Allows users to input data in a form
// Reads/fetch data from a form
app.use(express.urlencoded({extended: true}));

// Server Routes
app.get("/hello", (req, res) => {
    res.status(200).send("Hello World!");
})

let friends = [];

// Get all friends 
app.get("/friends/list", (req, res) => {
    if(friends.length <= 0){
        res.status(200).send("You don't have friends at this moment.");
    }else{
        res.status(200).send(friends);
    }
});

// Getting an input from postman
app.get("/input", (req, res) => {
    res.send(`Hello, ${req.body.name}`);
});

// Add friend
app.post("/friends/add", (req, res) =>{
    let friend = req.body.name;
    let checkFriend = friends.includes(friend);

    if(checkFriend){
        res.send(`You are already friends with ${friend}`);
    }else{
        friends.push(friend);
        res.status(201).send(`You are now friends with ${friend}.`);
    }
    
})

// Unfriend
app.delete("/friends/remove", (req, res) => {
    let friend = req.body.name;

    // Check if the friend exists in the list
    let index = friends.indexOf(friend);

    if(index !== -1){
        friends.splice(index, 1); // Remove the friend from the list
        res.status(200).send(`${friend} has been removed from your friends list.`);
    }else{
        res.status(404).send(`Cannot unfriend ${friend} because they are not in your friends list.`);
    }
});






// Port Listening
app.listen(port, () => console.log(`Server is now up and running at port ${port}.`));