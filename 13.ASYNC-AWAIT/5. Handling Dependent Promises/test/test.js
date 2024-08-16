console.log = function () { }
const { expect } = require('chai')
const rewire = require('rewire');
let logs = [];

describe('', function () {
    it('', async function () {

        let appModule;
        try {
            appModule = rewire("../app.js")
        } catch (e) {
            expect(true, 'Try checking your code again. You likely have a syntax error.').to.equal(false);
        }
        let makeBeans
        try {
            makeBeans = appModule.__get__("makeBeans");
        } catch (e) {
            expect(true, 'Did you create a `makeBeans()` function?').to.equal(false);
        }
      expect(makeBeans, "Is `makeBeans()` a function?").to.be.an.instanceOf(Function);

      //try{
        let testValue = makeBeans();
        expect(testValue, "Your `makeBeans()` function needs to be an `async` function. Make sure you've included the keyword `async`").to.be.an.instanceOf(Object);
      /*}
      catch(e){
       expect(true, `${e}`).to.equal(false);
      }
      */
    });
});