const ShoeSize = require('./interface');

it('should convert from US to UK correctly', () => {
    expect(ShoeSize.fromUsSize(6).ukSize()).toBe(4);
    expect(ShoeSize.fromUkSize(4).usSize()).toBe(6);

    expect(ShoeSize.fromUsSize(7).ukSize()).toBe(5);
    expect(ShoeSize.fromUkSize(5).usSize()).toBe(7);

    expect(ShoeSize.fromUsSize(8).ukSize()).toBe(6);
    expect(ShoeSize.fromUkSize(6).usSize()).toBe(8);
    
    // more cases...    
});