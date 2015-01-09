var assert = require("assert");

describe('Server test', function(){

  describe('Test - environment variables', function(){
    it('should have defined port', function(){
      assert.notEqual(process.env.PORT, undefined, 'Invalid port - must be a valid and available port');
    });
  });

});
