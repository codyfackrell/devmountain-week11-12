const {returnTwo, greeting, add, subtract, multiply, divide} = require('./functions.js')

test('should return int of 2', () => {
    expect(returnTwo()).toEqual(2)
})

test('should return "hello james"', () => {
    expect(greeting('James')).toEqual(`hello, James.`)
    expect(greeting('Jill')).toEqual(`hello, Jill.`)
})

test('should return sum of num1 + num2', () => {
    expect(add(1, 2)).toEqual(3)
    expect(add(5, 9)).toEqual(14)
})

describe('Math functions', () => {
    test('subtract', () => {
        expect(subtract(4, 2)).toEqual(2)
        expect(subtract(10, 4)).toEqual(6)
    })

    test('multiply', () => {
        expect(multiply(3, 2)).toEqual(6)
        expect(multiply(4, 3)).toEqual(12)
    })

    test('divide', () => {
        expect(divide(14, 2)).toEqual(7)
        expect(divide(24, 6)).toEqual(4)
    })

})