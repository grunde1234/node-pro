//import fs from 'fs';
import { error } from 'console';
import fs from 'fs/promises'; // import the fs module from the promises API

//write a file to the file system
//read a file from the file system
//apend a file to the file system


//readFile() async - callback version and promise version
//callback is the default version of readFile()

/* fs.readFile('./text.txt', 'utf-8',(err, data) =>{
    if (err) throw err;
    console.log(data); // log the data to the console
}); */

//readFileSync() - synchronous version of readFile() it stops the rest of the code

/* const data = fs.readFileSync('./text.txt', 'utf-8'); // read the file synchronously
console.log(data); // log the data to the console */


//readFile() - Promise .then() version

fs.readFile('./test.txt', 'utf-8')
.then(data => console.log(data))
.catch(err => console.log(err)); // log the data to the console or log the error to the console

// readFile() - async/await version

const readFile = async () => {
    try{
        const data = await fs.readFile('./test.txt', 'utf-8'); // read the file asynchronously
        console.log(data); // log the data to the console
    }catch(err){
        console.log(err); // log the error to the console
    }
}

//writeFile

const writeFile = async () =>{
    try{
     await fs.writeFile('test.txt', 'Hello there', 'utf8');
     await console.log("file create....")
    }catch(err){
        console.log(err)
    }
}

const appendFile = async ()=>{
    try{
        await fs.appendFile('./test.txt', '\nThis appended');
        console.log('appended.....')
    }catch(err){
        console.log(err)
    }
}

writeFile();
appendFile();
readFile();