const mathOperations = require('./calculator')

describe('calculator tests', ()=>{
    test('1+2 should return 3', () => { 
        expect(mathOperations.sum(1,2)).toBe(3)
     });

     test('12 -10 should return 3', () => { 
        expect(mathOperations.diff(12,10)).toBe(2)
     })

     test('1*2 should return 3', () => { 
        expect(mathOperations.multiply(1,2)).toBe(2)
     })

})