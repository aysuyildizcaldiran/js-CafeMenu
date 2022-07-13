function Drink(name,price){
    this.name=name;
    this.price=price;
}
Drink.prototype.createDrink=function(){
    return new Drink(this.name,this.price);
}

let drinks=[
    new Drink("Cream",25+"£"),
    new Drink("Tea's",30+"£")
];

let categorys=[
    "Cream",
    "Hot Drinks",
    "Iced Coffee",
   "Espresso Beverage",
    "Drip Coffe",
    "Frozen"
];
Drink.prototype.drinkGoster=function(){
    let html="";
    for(let i=0;i<drinks.length;i++){
        html+=`
           
            <div id="drinks">
                <img src="img/1.jpg">
                <p id="name">${drinks[i].name}</p>
                <p id="price">${drinks[i].price}</p>
            </div>
          
        `;
        console.log( drinks[i]);
    }
    document.querySelector("#container-drinks").innerHTML=html;
  }
