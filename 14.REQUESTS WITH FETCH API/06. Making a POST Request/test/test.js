console.log = function() {};
const assert = require('chai').assert;
const fs = require('fs');
const Structured = require('structured');

const code = fs.readFileSync('public/main.js', 'utf8');

describe('', function () {
  it('', function() {
    let structureOne = function() {
      const apiKey = $key
    }

    varCallbacks = {
      "$key": function(key){ 
        if(key.value === '<Your API Key>'){
          return {failure: 'Did you replace \'<Your API Key>\' with your actual API key?'}
        }
        return true
      }
    }

    let isMatchOne = Structured.match(code, structureOne, { varCallbacks });
    assert.isOk(isMatchOne, varCallbacks.error || 'Did you reassign `apiKey` to your Rebrandly API key?');
  });
});
