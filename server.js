import http from 'http';
import fs from 'fs/promises';
import url from 'url';
import path from 'path';
const PORT = process.env.PORT; // port number


//get current path
const __filename = url.fileURLToPath(import.meta.url); // get the current file path
const __dirname = path.dirname(__filename); // get the directory name of the current file 

console.log(__dirname, __filename); // log the directory name and file path to the console

const server = http.createServer(async (req, res) =>{
   
    try{
        //check if the request is a GET request
        if(req.method === 'GET'){
            let filePath;
            if(req.url === '/'){
              filePath = path.join(__dirname, 'public',  'index.html'); // set the file path to the index.html file
            }else if(req.url === '/about'){
                filePath = path.join(__dirname, 'public',  'about.html'); // set the file path to the index.html file
            }else{
                throw new Error('Page Not Found'); // throw an error if the page is not found
            }

            const data = await fs.readFile(filePath);
            res.setHeader('Content-Type', 'text/html');
            res.write(data);
            res.end(); // end the response automatically to when done

        }
        else{
            throw new Error('Method Not Allowed'); // throw an error if the request is not a GET request
        }
    }
    catch(error){
        res.writeHead(404, {'Content-Type':'text/plain'}); // set the status code and content type of the response
        res.end(`<h1>${error.message}</h1>`); // send the error message to the client
    }
    
});

server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

 // set the content type of the response
   /*  res.statusCode = 404;  */// set the status code of the response
   /* console.log(req.url); */ // log the request url to the console
   /* console.log(req.method); */
   // set the status code and content type of the response
    /* res.write('Hello World!'); *///text to client

    /*  res.setHeader('Content-Type', 'text/html'); // set the content type of the response
 */


/* In short:

url.fileURLToPath(import.meta.url) converts the module’s URL to a file path.
🔹 Breakdown:

    import.meta.url → gives the file URL of the current module (e.g. file:///C:/project/server.js).

    url.fileURLToPath(...) → converts that file URL into a regular file path (e.g. C:\project\server.js).

Useful in ES modules (with "type": "module") when you need the current file path, like you would get from __filename in CommonJS.


 */

/*   res.writeHead(200, {'Content-Type':'text/html'}); 
            res.end("<h1>HomePage</h1>");// end the response automatically to when done */