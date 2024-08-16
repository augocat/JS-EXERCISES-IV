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
        let announceDinner
        try {
            announceDinner = appModule.__get__("announceDinner");
        } catch (e) {
            expect(true, 'Did you delete the `announceDinner` function?').to.equal(false);
        }
        console.log = param => logs.push(param)
        appModule.__set__('brainstormDinner', () => Promise.resolve('cat'))

        await announceDinner();
        expect(logs.includes(`I'm going to make cat for dinner.`), "Your `async` function needs to save a variable assigned to `await brainstormDinner()` and then log a string in the format: `I'm going to make [resolved value] for dinner.` Double check spelling and syntax.").to.equal(true)
    });
});