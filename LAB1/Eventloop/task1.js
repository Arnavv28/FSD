const fun1 = () => {
    console.log("fun1 starts");
    fun2();
    console.log("fun1 running");
    console.log("fun1 end");
};

const fun2 = () => {
    console.log("fun2 start");
    fun3();
    console.log("fun2 running");
    console.log("fun2 end")
};
const fun3 = () => {
    console.log("fun3 start");
    console.log("fun3 running");
    console.log("fun3 end")
}
function main(){
    console.log("main starts");
    fun1();
    console.log("main running");
    console.log("main end");
    };
    main();
//js is a synchronous and single threaded.
//In asynchonous we use event loop to manage the call stack.
//asynchonous call using timer 
// 1-set timeout
// 2-set immidiate
// 3-process.next tick
// 4-set interval
