const ShoeSize = require('./interface');

it('should convert shoe sizes correctly and handle invalid shoe sizes', () => {
    let shoeSize = ShoeSize.fromUsSize(9);
    expect(shoeSize.usSize()).toBe(9);
    expect(shoeSize.ukSize()).toBe(7);

    shoeSize = ShoeSize.fromUsSize(10);
    expect(shoeSize.usSize()).toBe(10);
    expect(shoeSize.ukSize()).toBe(8);

    shoeSize = ShoeSize.fromUkSize(7);
    expect(shoeSize.usSize()).toBe(9);
    expect(shoeSize.ukSize()).toBe(7);

    shoeSize = ShoeSize.fromUkSize(8);
    expect(shoeSize.usSize()).toBe(10);
    expect(shoeSize.ukSize()).toBe(8);

    expect(() => { ShoeSize.fromUsSize(-1) }).toThrow();
    expect(() => { ShoeSize.fromUsSize('17') }).toThrow();

    expect(() => { ShoeSize.fromUkSize(-1) }).toThrow();
    expect(() => { ShoeSize.fromUkSize('17') }).toThrow();
});
