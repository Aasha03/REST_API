const http = require("http");
// require("dotenv").config();
const getReq = require("./methods/get-req");
const postReq = require("./methods/post-req");
const deleteReq = require("./methods/delete-req");
const putReq = require("./methods/put-req");
let movies = require("./data/movies.json");
// we need to enter the port where our server will be restart automatically
const PORT = process.env.PORT || 5001;

// creating http server
const server = http.createServer((req,res) => {
    req.movies = movies;
    switch(req.method){
        case "GET":
            getReq(req,res);
            break;
        case "POST":
            postReq(req,res);
            break;
        case "PUT":
            putReq(req,res);
            break;
        case "DELETE":
            deleteReq(req,res);
            break;
        default:
            res.statusCode = 404;
            res.setHeader("content-Type", "application/json");
            res.write(JSON.stringify({ title: "Not found", message: "Route not found" }));
            res.end();
        }
});

server.listen(PORT, ()=>{
    console.log(`Server started on port: ${PORT}`); //port listen to 5001 (how to listen to env port?)
    console.log(process.env.PORT);
})

