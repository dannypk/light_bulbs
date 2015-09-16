/**
 * Created by daniel.pacurici on 16.09.2015.
 */
var bulbs = require('../app/light_bulbs.js');

describe("my first dummy test", function(){
   it("should check for dummy function to work and return the sum of 2+3 = 5", function(){
       var a = 2, b = 3;
      expect(bulbs.sum(a,b)).toBe(5);
   });
});