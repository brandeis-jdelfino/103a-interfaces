const ShoeSize = require('./interface');

it('should initialize correctly from a US shoe size', () => {
    let shoeSize = ShoeSize.fromUsSize(9);
    expect(shoeSize.usSize()).toBe(9);
    expect(shoeSize.ukSize()).toBe(7);

    shoeSize = ShoeSize.fromUsSize(10);
    expect(shoeSize.usSize()).toBe(10);
    expect(shoeSize.ukSize()).toBe(8);
});

it('should initialize correctly from a UK shoe size', () => {
    let shoeSize = ShoeSize.fromUkSize(7);
    expect(shoeSize.usSize()).toBe(9);
    expect(shoeSize.ukSize()).toBe(7);

    shoeSize = ShoeSize.fromUkSize(8);
    expect(shoeSize.usSize()).toBe(10);
    expect(shoeSize.ukSize()).toBe(8);
});

it('should throw an error when initialized with a negative number', () => {
    expect(() => { ShoeSize.fromUsSize(-1) }).toThrow();
    expect(() => { ShoeSize.fromUkSize(-1) }).toThrow();

});

it('should throw an error when initialized with a string', () => {
    expect(() => { ShoeSize.fromUsSize('17') }).toThrow();
    expect(() => { ShoeSize.fromUkSize('17') }).toThrow();
});