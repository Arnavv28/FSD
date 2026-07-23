import { EventEmitter } from "node:events";

const task = new EventEmitter() ;

const sayHi = (name) =>{
    console.log(`loggedin ${name}`);
};

task.on('greet',sayHi)

task.on('greet',()=>{
    console.log("logged Out");
});

task.once('greet',()=>{
    console.log("System Started...");
})

task.once("exit", (name) => {
    console.log(`system is shutting down by ${name}`);
});


task.emit('greet','Arnav Chauhan');
console.log();
task.emit('greet','arpit');
task.off('greet',sayHi);
task.emit('greet',' arnav');  //
console.log();
task.emit("exit",'Manager');   // execute only once
task.emit("exit",'Employee');  //won't affect
console.log("total listeners for greet event: ",
    task.listenerCount('greet'));

task.emit('greet','Manager');