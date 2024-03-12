class ShoeSpecification {
    /**
     * 
     * @param {string} brand 
     * @param {string} model 
     * @param {int} year 
     * @param {ShoeSize} size
     */
    constructor(brand, model, year, size) {}
}

class ShoeSize {
    /**
     * @param {number} size 
     * @returns {ShoeSize}
     */
    static fromUsSize(size) {}

    /**
     * @param {number} size 
     * @returns {ShoeSize}
     */
    static fromUkSize(size) {}

    /**
     * @returns {number}
     */
    usSize() {}

    /**
     * @returns {number}
     */
    ukSize() {}

}
class Inventory {
    /**
     * 
     * @param {ShoeSpecification} shoeSpec 
     */
    addShoe(shoeSpec) {}

    /**
     * 
     * @param {ShoeSpecification} shoeSpec 
     * @throws Throws an error if no shoes match the given spec
     */
    removeShoe(shoeSpec) {}

    /**
     * A result from a shoe search
     * @typedef {Object} ShoeSearchResult
     * @property {ShoeSpecification} shoeSpec - The specification of the matching shoe.
     * @property {int} count - Number of this shoe in the inventory.
     */

    /**
     * 
     * @param {string=} brand If not null, limit to shoes of this brand. Case-sensitive.
     * @param {string=} model If not null, limit to shoes of this model. Case-sensitive.
     * @param {ShoeSize[]=} sizes If not null, limit to shoes that match any of the sizes in the list.
     * @returns {ShoeSearchResult[]} A list of matching shoes
     */
    findShoe(brand=null, model=null, sizes=null) {}
}
