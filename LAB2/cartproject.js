import readline from "readline/promises";
import {stdin,stdout} from "process";

// database using file starts
const FILE = "product.json";

const getCart = () =>{
    const data= await readFile(FILE,'utf-8');
    return JSON.parse(data);
};

const saveCart = async() =>{
    await writeFile(FILE , JSON.stringify(Cart,null,2));
};

const addToCart = async (product)=>{
    const cart = await getCart();
    const isFoundInCart = cart.find((item) => item.id === product.id);
    if(isFoundInCart){
        isFoundInCart.qty += 1;
    }
    else cart.push(product);
    await saveCart(cart);
    console.log(`${product.name} added/updated to 🛒`);
};

const displayCart = async () => {
    const cart = await getCart();
    if(cart.lenght==0){
        console.log("🛒 is empty");
    return;
    }
    console.table(cart);
    const total = cart.reduce((Sum,item) => sim + item.price * item.qty,0);
};


 const main = async () => {
    let choice;
    const cin =readline.createInterface({input:stdin,output:stdout});
    do{
    console.log("Welcome to Amazon Shopping 🛒");
    console.log("1...........Show Cart");
    console.log("2...........Add Product");
    console.log("3...........Remove Product");
    console.log("4...........Update Quantity");
    console.log("5...........Checkout");
    choice =await cin.question("Enter your choice");

    switch(Number(choice)){
    case 1: 
    console.log("Show Cart");
    break;
    case 2:
        console.log("add product");
        break;
    case 3:
        console.log("remove product");
        break;
    case 4:
        console.log("update quantity");
        break;
    case 5:
        console.log("")
    }
} while(choice!=5);
    cin.close();

};
main();