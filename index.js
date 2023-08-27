let cart = [
    {
        id: 123,
        name: "Microphone",
        price: 500,
        category: "Electronics",
    },
    {
        id: 456,
        name: "Headphone",
        price: 700,
        category: "Electronics",
    },
    {
        id: 789,
        name: "Speakers",
        price: 1350,
        category: "Electronics",
    },
];
function totalPrice() {
    let sum = 0;
    for (let i = 0; i < cart.length; i++) {
        sum += cart[i].price;
        console.log(`The price for the ${cart[i].name} in cart is : ${cart[i].price}`);
    }
    console.log(`Total price for the products in cart is : ${sum}`);
}
totalPrice();
export {};
