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

    let isMatchOne;
    try {
			isMatchOne = Structured.match(code, structureOne, { varCallbacks });
    } catch(e) {
			assert.isOk(false, 'Looks like you have an error. Double check your syntax.');
    }
    
    
    assert.isOk(isMatchOne, varCallbacks.error || 'Did you reassign apiKey to be your Rebrandly API key?')
  });
});
