console.log = function() {};
const assert = require('chai').assert;
const fs = require('fs');
const Structured = require('structured');

const code = fs.readFileSync('public/main.js', 'utf8');

describe('', function () {
  it('', function() {
    let structureOne = function() {
      const shortenUrl = () => {
        fetch(_).then()
      }
    }

    let structureTwo = function() {
      const shortenUrl = () => {
        fetch(_).then(response => {})
      }
    }

    let isMatchOne = Structured.match(code, structureOne);
    let isMatchTwo = Structured.match(code, structureTwo);
    assert.isOk(isMatchOne, 'Did you chain `.then()` to `fetch()`?');
    assert.isOk(isMatchTwo, 'Did you set `response` as a parameter for the callback function inside `.then()`?');
  });
});
