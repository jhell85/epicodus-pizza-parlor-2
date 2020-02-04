//---------Back end-----------
//----------Order Logic--------
export function Order() {
    this.pizzas = [];
    this.currentId = 0;
    this.price = 0
  }
  
  Order.prototype.addPizza = function(pizza) {
    pizza.price = getPrice(pizza)
    pizza.id = this.assignId()
    this.pizzas.push(pizza)
    this.price += pizza.price
  }
  Order.prototype.addOrderTotal = function(pizza){
    this.price += pizza.price
  }
  
  Order.prototype.assignId = function () {
    this.currentId ++;
    return this.currentId
  }
  //------------Pizza Logic-----------------
  export function Pizza(pizzaSize,toppings,pizzaPrice) {
    this.size = pizzaSize;
    this.toppings = toppings;
    this.price = pizzaPrice;
  }
  export function getPrice(pizza){
    price = 0
    if(pizza.size === "Small"){
      price += 10
    }else if(pizza.size === "Medium"){
      price += 15
    }else{
      price += 18
    }
    pizza.toppings.forEach(topping => {
      if (topping === "Pepperoni" || topping === "Sausage"){
        price += 2
      }else if(topping === "Pineapple" || topping === "Mushrooms"){
        price += .75
      }
    });
    return price
  }
  