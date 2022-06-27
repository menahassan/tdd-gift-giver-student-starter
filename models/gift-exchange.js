const { BadRequestError } = require('../utils/errors.js')

class GiftExchange{
    constructor(){
        this.super();
    }

    static pairs(names){
        //if number of names is odd, throw an error
        if(names.length % 2 != 0){
            throw new BadRequestError('the number of names can\'t be odd.')
        }

        const namedPairs = []
        while(names.length){
            const currentPair = []
            while(currentPair.length < 2 && names.length > 0){
                const index = Math.floor(Math.random() * names.length)

                currentPair.push(names[index])

                names.splice(index, 1)
            }

            namedPairs.push(currentPair)
        }
        return namedPairs
        //otherwise, randomly pair names together
        //return the paired names
    }

    static traditional(names){
        const pairs = this.pairs(names)

        const traditionalPairs = pairs.reduce((prev, item, index) => {
            if(index + 1 == pairs.length){
                return [
                    ...prev,
                    `${item[0]} is giving a gift to ${item[1]}`,
                    `${item[1]} is giving a gift to ${pairs[0][0]}`,
                ]
            }
            else{
                return [
                    ...prev,
                    `${item[0]} is giving a gift to ${item[1]}`,
                    `${item[1]} is giving a gift to ${pairs[index + 1][0]}`,
                ]
            }
        }, [])

        return traditionalPairs
    }
}

module.exports = GiftExchange