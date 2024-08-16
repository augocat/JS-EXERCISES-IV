const menu = {
  _meal: '',
  _price: 0,
  set meal(mealToCheck) {
    if (typeof mealToCheck === 'string') {
      return this._meal = mealToCheck;
    }
  },
  set price(priceToCheck) {
    if (typeof priceToCheck === 'number') {
      this._price = priceToCheck;
    }
  },
  get todaysSpecial() {
    if (this._meal && this._price) {
      console.log(`Todays SPECIAL is ${this._meal} for \$${this._price}.00.`);
    } else {
      console.log('Meal or Price was not correctly set.');
    }
  }
};


menu.meal = 'Cheese Tortellini';
menu.price = 23;

//console.log(`meal is ${menu._meal}.\nthe price is \$${menu._price}.00.`)
menu.todaysSpecial;


