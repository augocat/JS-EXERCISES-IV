//Don’t forget the await keyword! It may seem obvious, but this can be a tricky mistake to catch because our function will still run— it just won’t have the desired results.
//We’re going to explore this using the following function, which returns a promise that resolves to 'Yay, I resolved!' after a 1 second delay:
let myPromise = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Yay, I resolved!')
    }, 1000);
  });
}
//Now we’ll write two async functions which invoke myPromise():
async function noAwait() {
 let value = myPromise();
 console.log(value);
}
async function yesAwait() {
 let value = await myPromise();
 console.log(value);
}
noAwait(); // Prints: Promise { <pending> }
yesAwait(); // Prints: Yay, I resolved!
