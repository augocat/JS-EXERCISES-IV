let {cookBeans, steamBroccoli, cookRice, bakeChicken} = require('./library.js');

async function serveDinnerAgain() {
const foodArray = await Promise.all([steamBroccoli(), cookRice(), bakeChicken(), cookBeans()]);
console.log(`Dinner is served. We’re having ${foodArray[0]}, ${foodArray[1]}, ${foodArray[2]}, and ${foodArray[3]}.`);
}

serveDinnerAgain();