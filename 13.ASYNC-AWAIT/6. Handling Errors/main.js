const cookBeanSouffle = require('./library.js');

async function hostDinnerParty() {
  try {
    let meal = await cookBeanSouffle();
    console.log(`${meal} is served!`);
  } catch (error) {
    console.log(error);
    console.log('Ordering a pizza!');
  }
} 

hostDinnerParty();


