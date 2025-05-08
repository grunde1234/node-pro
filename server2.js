import { createServer } from 'http';
const PORT = process.env.PORT;// path to the public folder


//DB
const users = [
    {id: 1, name: 'John Doe'},
    {id: 2, name: 'Jane Doe',},
    {id: 3, name: 'Jim Doe'}
]

// Logger middleware
const logger = (req, res, next) => {
    console.log(`${req.method} ${req.url}`); // log the request method and url to the console
    next(); // call the next middleware function
}

//JSON middleware
const jsonMiddleware = (req, res, next)=>{
    res.writeHead(200, {'Content-Type': 'application/json'}); // set the status code and content type of the response
    next(); // call the next middleware function
}

//route handler for GET /api/users
const getUsersHandler = (req, res) => {
    res.write(JSON.stringify(users)); // send the response to the client
    res.end(); // end the response automatically to when done
}

//route handler for GET /api/users/:id
const getUserByIdHandler = (req, res) => {
    const id = req.url.split('/')[3]; // get the id from the url
    const user = users.find(user => user.id === parseInt(id)); // find the user with the given id
    if(user){
        res.write(JSON.stringify(user)); // send the response to the client
        res.end(); // end the response automatically to when done
    } 
    /* else{
        res.writeHead(404, {'Content-Type': 'application/json'}); // set the status code and content type of the response
        res.end(JSON.stringify({ message: "User not found" })); // wrap message in JSON.stringify
    } */
}

//not found
const notFoundHandler = (req, res) => {
    res.writeHead(404, { 'Content-Type': 'application/json' }); // use writeHead, not setHeader for status
    res.end(JSON.stringify({ message: "Not Found" })); // wrap message in JSON.stringify
}

const server = createServer((req, res) => {
    logger(req, res, () => {
      jsonMiddleware(req, res, () => {
        if(req.url === 'api/users'  && req.method === 'GET'){
            getUsersHandler(req, res); // call the getUsersHandler function
        }
        else if(req.url.match(/\api\/users\/([0-9]+)/) && req.method === 'GET'){
            getUserByIdHandler(req, res); // call the getUserByIdHandler function

        }
    });
    }); // call the logger middleware function
    
});

server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`); // log the server status to the console
})
/* const server = http.createServer((req, res)=>{
    res.writeHead(200, {'Content-Type': 'text/html'}); // set the status code and content type of the response
    res.write('<h1>Hello World!</h1>'); // send the response to the client
    res.end();
});

server.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`); // log the server status to the console
}) */