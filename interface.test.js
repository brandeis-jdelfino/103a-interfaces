const ShoeSize = require('./interface');

it('should convert from US to UK correctly', () => {
    const shoeSizes = [
        { us: 6, uk: 4 },
        { us: 7, uk: 5 },
        { us: 8, uk: 6 },
        // more shoe sizes
    ];

    shoeSizes.forEach((size) => {
        const usSize = ShoeSize.fromUsSize(size.us);
        expect(usSize.ukSize()).toBe(size.uk);

        const ukSize = ShoeSize.fromUkSize(size.uk);
        expect(ukSize.usSize()).toBe(size.us);
    });
});