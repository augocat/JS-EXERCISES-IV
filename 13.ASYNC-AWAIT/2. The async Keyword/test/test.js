console.log = function () { }
const { expect } = require('chai')
const rewire = require('rewire');
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
        let withAsync
        try {
            withAsync = appModule.__get__("withAsync");
        } catch (e) {
            expect(true, 'Did you create `withAsync`?').to.equal(false);
        }
        expect(withAsync, "`withAsync()` should be a function. Make sure to use the `async` keyword.").to.be.an.instanceOf(Function);
        let usedAsync = /async/.test(code)
        expect(usedAsync, "`withAsync()` should be an `async` function.").to.equal(true);
				let test1 = await withAsync(0);
        let test2 = await withAsync(100);
        expect(test1, "Your `async` function should return 'zero' if the argument passed to it is `0`.").to.equal('zero')
        expect(test2, "Your `async` function should return 'not zero' if the argument passed to it is not `0`.").to.equal('not zero')
    });
});