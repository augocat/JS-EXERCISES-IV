console.log = function() {};
const assert = require('chai').assert;
const fs = require('fs');
const Structured = require('structured');

const code = fs.readFileSync('public/main.js', 'utf8');

describe('', function () {
  it('', function() {
    let structureOne = function() {
      const getSuggestions = () => {
        _.then(_).then()
      }
    };

    let structureTwo = function() {
      const getSuggestions = () => {
        _.then(_).then(jsonResponse => {})
      }
    };

    let isMatchOne = Structured.match(code, structureOne);
    let isMatchTwo = Structured.match(code, structureTwo);
    assert.isOk(isMatchOne , 'Did you create an anonymous arrow callback function for the second `.then()`?');
    assert.isOk(isMatchTwo , 'Did you pass in `jsonResponse` as parameter in the arrow function?');
  });
});
