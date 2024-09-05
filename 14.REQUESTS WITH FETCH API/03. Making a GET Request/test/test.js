console.log = function() {};
const assert = require('chai').assert;
const fs = require('fs');
const Structured = require('structured');

const code = fs.readFileSync('public/main.js', 'utf8');

describe('', function () {
  it('', function() {
    let structureOne = function() {
      const url = $url
    };

    varCallbacks = {
      "$url": function(url){
        if(url.value !== 'https://api.datamuse.com/words?sl='){
          return {failure: 'Did you assign \'http://api.datamuse.com/words?sl=\' to `const url`?'}
        }
        return true
      }
    }

    let isMatchOne = Structured.match(code, structureOne, { varCallbacks });
    
    assert.isOk(isMatchOne, varCallbacks.failure || 'Did you declare `const url` and assign the correct URL?');
  });
});
