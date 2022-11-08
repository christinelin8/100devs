//Create a constructor with 4 properties and 3 methods

function PizzaMachine(size, toppings, crust, sauce) {         // line creates a constructor with parameters
    this.size = size
    this.toppings = toppings
    this.crust = crust
    this.sauce = sauce
    this.pickupTime = function() {
        console.log('Calculating time it takes for pickup....')
    }
    this.maker = function() {
        console.log('Said cook has received your order and is ready to start making your pizza!')
    }
    this.eat = function() {
        console.log('So good!')
    }
}

//creating a new pizza with the constructor 
let pizza = new PizzaMachine('medium', ['sasuage', 'mushroom'], 'stuffed', 'tomato')
