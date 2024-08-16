console.log = function () { }
const { expect } = require('chai')
const rewire = require('rewire');
let logs = [];
const fs = require('fs');
const code = fs.readFileSync('app.js', 'utf8');

describe('', function () {
    it('', async function () {

        let appModule;
        try {
            appModule = rewire("../app.js")
        } catch (e) {
            expect(true, 'Try checking your code again. You likely have a syntax error.').to.equal(false);
        }
        let serveDinner
        try {
            serveDinner = appModule.__get__("serveDinner");
        } catch (e) {
            expect(true, 'Is your `serveDinner()` function still declared properly?').to.equal(false);
        }
      
     expect(serveDinner, "`serveDinner()` should be a function. Make sure to use the `async` keyword.").to.be.an.instanceOf(Function);
        
        appModule.__set__('cookBeans', () => {  
          return new Promise((resolve, reject)=>{
          logs.push('1')
          resolve('first')
        })                    
        })
                       
        appModule.__set__('steamBroccoli', () => {   
          return new Promise((resolve, reject)=>{
            logs.push('2')
          resolve('second')
        })                    
        })
        
        
        appModule.__set__('cookRice', () => {  
          return new Promise((resolve, reject) => {
            logs.push('3')
          resolve('third')
        })                    
        })
        
        
         appModule.__set__('bakeChicken', () => {
          return new Promise((resolve, reject)=>{
            logs.push('4')
          resolve('fourth')
         })                    
        })


         let testValue = serveDinner();
        expect(testValue, "Your `serveDinner()` function needs to be an `async` function. Make sure you've included the keyword `async`").to.be.an.instanceOf(Object);
      
       await serveDinner();
      
      let expectedLogs = ['1', '2', '3', '4']
      let areAllLogs = expectedLogs.every(item => logs.includes(item))
      if (areAllLogs){
        let codeTests = [/await *cookBeans *\( *\)/, /await *steamBroccoli *\( *\)/, /await *cookRice *\( *\)/, /await *bakeChicken *\( *\)/]
         let areAnyRegex = codeTests.some(item => item.test(code))
        if (areAnyRegex) {
        	 expect(true, "Don't directly `await` any of the functions. We want to take advantage of concurrency by invoking the functions without initially `await`-ing them.").to.equal(false);
        }
       
      }
      else {
        expect(true, "Your `async` function, `serveDinner()` should invoke each of the promise-returning functions.").to.equal(false);
      }

    });
});