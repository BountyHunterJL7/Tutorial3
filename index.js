// const sum = (num1, num2) => {
//     return num1+num2;
// }
// const result = sum(2,3);
// console.log(result);

// const fs = require("fs");

// const generateFile = () => {
//     try {
//         fs.writeFileSync("data.txt", "this file was made with node");
//     } catch (err){
//         console.log(err);
//     }
// }

// generateFile();

// const http = require("http");

// http.createServer(function (req, res) {
//     res.write("server started. hello!");
//     res.end();
// }).listen(8080);

// const myModule = require("./my-module");

// const date = myModule();

// console.log(date);

//requireing express
const express = require("express");

//initializing express app
const app = express();

//specifying port to listen on localhost:9000
const port = 9000;

// API / URLS
app.get("/", (req, res) => {
    res.send("hi from the express server!");
});

app.get("/api/cars", (req, res) =>{

    // call to db

    //return dummy data
    const cars = ["Mustang", "911", "RX7"];
    res.send(JSON.stringify(cars));
});

// running the express http server on the port we specified
app.listen(port, () => {
    console.log ("listening on port", port);
});