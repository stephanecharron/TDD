var sayHello = require('../src/hello');

describe('Hello', function () {
   it('hello' , function () {
        expect(sayHello('Jane')).toBe('Hello, Jane!');
   });
});
