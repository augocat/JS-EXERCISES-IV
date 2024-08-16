async function fivePromise() { 
  return 5;
}
fivePromise()
.then(resolvedValue => {
    console.log(resolvedValue);
  })  // Prints 5
