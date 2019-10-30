/**
 * In tis file I provide necessary tests for the internal functions of the API 
 * 
 * All are functions are tested using Jest
 */

const {analyze} = require('./analyze')

describe('Testing analyze function', () => {
    it('Testing: empty string', () => {
        expect(analyze("")).toStrictEqual({textLength: {withSpaces:0 , withoutSpaces:0} , wordCount :0 ,characterCount: []})
    })

    it('Testing: \"hello 2 times  \"', () => {
        expect(analyze("hello 2 times  ")).toStrictEqual({textLength: {withSpaces:15 , withoutSpaces:11} , wordCount :3 ,characterCount: [{"e":2},{"h":1},{"i":1},{"l":2},{"m":1},{"o":1},{"s":1},{"t":1}]})
    })

    it('Testing: 3 Spaces"', () => {
        expect(analyze("   ")).toStrictEqual({textLength: {withSpaces:3 , withoutSpaces:0} , wordCount :0 ,characterCount: []})
    })

    it('Testing: error invalid input"', () => {
        try {
            analyze()
        } catch(error) {
            expect(error.data).toEqual({name: "Invalid input", description: "Invalid input detected, expected to get a string"})
        }
    })
})