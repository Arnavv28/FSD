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

task.off("exit"(name) =>{
    console.log(`system is shutting down by $(name)`);
});



task.emit('greet','Arnav Chauhan');
//task.emit('greet','arnav');
//task.emit('greet','arnav chauhan');
//task.emit("exit",'Manager');

const shuttingDown=(name)=>

task.emit('greet','Manager');