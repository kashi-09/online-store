

interface Product {
id:number,
name:string,
price:number,
category:string,
}

type Cart = Product[]


let cart:Cart =[
    {
  id:123,
    name:"Microphone",
    price:500,
    category:"Electronics",
},
    {
  id:456,
    name:"Headphone",
    price:700,
    category:"Electronics",
},
    {
  id:789,
    name:"Speakers",
    price:1350,
    category:"Electronics",
},

];



interface Customer {
    id:number,
    name:string,
    email:string,
}

type Order = {
    customer: Customer,
    cart: Cart,
}

function totalPrice(cart:Cart) {

let sum: number = 0;
    for (let i of cart){
sum += i.price;
console.log(`The price for the ${i.name} in cart is : ${i.price}`);
    }
  
console.log(`Total price for the products in cart is : ${sum}`);
    return sum;
}

totalPrice(cart);







