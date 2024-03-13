const assert = require('assert');
const ShoeSize = require('./interface');

it('should convert shoe sizes correctly and handle invalid shoe sizes', () => {
    const shoeSize = ShoeSize.fromUsSize(9);
    assert.strictEqual(shoeSize.usSize(), 9);
    assert.strictEqual(shoeSize.ukSize(), 7);

    shoeSize.size = 10;
    assert.strictEqual(shoeSize.usSize(), 10);
    assert.strictEqual(shoeSize.ukSize(), 8);

    shoeSize.size = -1;
    expect(shoeSize.usSize).toThrow();
    expect(shoeSize.ukSize).toThrow();

    shoeSize.size = '17';
    expect(shoeSize.usSize).toThrow();
    expect(shoeSize.ukSize).toThrow();
});
