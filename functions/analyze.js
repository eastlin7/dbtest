/**
 * Analyzes text and returns the length of text, with and without whitespace, 
 * as well as the count of each character in an alphabetically sorted json array
 * @param {*} input 
 */
function analyze(input) {
    if (input === undefined || input === null || typeof(input) !== "string") {
        let error =  new Error;
        console.log('error: ', input)

        error.data = {name: "Invalid input", description: "Invalid input detected, expected to get a string"}
        throw error;
    }

    const englishLettersOnly = input.replace(/\s/g,'').toLowerCase().replace(/[^a-z]+/g, "")
    
    var wordCountString = input.match(/\S+/g)
    var wordCount;
    if (wordCountString === null) {
        wordCount = 0;
    } else {
        wordCount = wordCountString.length
    }
    const withoutSpaces = input.replace(/\s/g,'').length

    var characterCount = buildCharacterArray(englishLettersOnly)

    var response = {
        "textLength":{"withSpaces":input.length,withoutSpaces},
        wordCount,
        characterCount
    };

    return response;
}


/**
 * Function that creates an array of JSON objects that has all 
 * the characters in the provided string and returns the frequency of each character 
 * 
 * The return is sorted alphabetically 
 * @param {*} input a string  
 */
function buildCharacterArray(input) {

    var characterCount = []

    for (let i = 0; i < input.length; i++) {
        const letter = input[i];
        const index = findCharacterIndex(letter, characterCount);
        if (index === -1) {
            characterCount.push({[letter]: 1})
        } else {
            characterCount[index] = characterCount[index][letter] = {[letter]: characterCount[index][letter]+1};
        }
    }
    characterCount.sort(sortJsonListAlphabetically)
    return characterCount;
}


/**
 * Helper function that finds index of a character
 * @param {*} character 
 */
function findCharacterIndex(character, arr) {
    for (let i = 0; i < arr.length; i++) {
        if (Object.keys(arr[i])[0] === character) {
            return i;
        }
    }
    return -1;
}

/**
 * Helper function to sort the Json list alphabetically
 * @param {*} a first elem
 * @param {*} b second elem
 */
function sortJsonListAlphabetically(a, b) {
    if (Object.keys(a)[0] >Object.keys(b)[0]) {
        return 1;
    }  
    if (Object.keys(a)[0] < Object.keys(b)[0]) {
        return -1;
    } 
    return 0;
}

module.exports.analyze = analyze;