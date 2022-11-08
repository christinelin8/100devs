//Create a pizza object that has four properties and three methods

//our object
let pizza = {}

//object properties
pizza.size = 'large'
pizza.toppings = ['chicken', 'spinach', 'ham']
pizza.crust = 'normal'
pizza.sauce = 'tomato'

//object methods
pizza.pickupTime = function() {
    console.log('Our tracker will update your pickup time as it is being made..')
}

pizza.maker = function() {
    console.log('Said cook just got your order and is making your order now!')
}

pizza.eat = function() {
    console.log('It is so good! And cheaper than Big Mario!')
}  