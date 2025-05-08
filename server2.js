import { createServer } from 'http';
const PORT = process.env.PORT;// path to the public folder

//DB
const users = [
    {id: 1, name: 'John Doe'},
    {id: 2, name: 'Jane Doe',},
    {id: 3, name: 'Jim Doe'}
]


const server = createServer((req, res) => {
    if(req.url === '/api/users' && req.method === 'GET'){
        res.writeHead(200, {'Content-Type': 'application/json'}); // set the status code and content type of the response
        res.write(JSON.stringify(users)); // send the response to the client
        res.end(); // end the response automatically to when done
    }
    else if(req.url.match(/\api\/users\/[0-9]+/) && req.method === 'GET'){
        const id = req.url.split('/')[3]; // get the id from the url
        const user = users.find(user => user.id === parseInt(id)); // find the user with the given id
        if(user){
            res.writeHead(200, {'Content-Type': 'application/json'}); // set the status code and content type of the response
            res.write(JSON.stringify(user)); // send the response to the client
            res.end(); // end the response automatically to when done
        } 
        else{
            res.writeHead(404, {'Content-Type': 'application/json'}); // set the status code and content type of the response
            res.end(JSON.stringify({ message: "User not found" })); // wrap message in JSON.stringify
        }
    }else{
        res.writeHead(404, { 'Content-Type': 'application/json' }); // use writeHead, not setHeader for status
        res.end(JSON.stringify({ message: "Not Found" })); // wrap message in JSON.stringify
    }
})

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