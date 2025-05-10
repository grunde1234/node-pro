import { EventEmitter } from "events";

const myEmitter = new EventEmitter();

function greetHandler(name){
    console.log('hello world '+name);
}

function goodbyeHandler(name){
    console.log('goodbye world '+name);
}

//register event listner

myEmitter.on('greet', greetHandler);
myEmitter.on('good', goodbyeHandler);


//Emit events
myEmitter.emit('greet', 'jon');
myEmitter.emit('good', 'john');

myEmitter.on('error', (err)=>{
  if(err)console.log(err);
});

//simulate the error

myEmitter.emit('error', new Error('Something is wrong'))