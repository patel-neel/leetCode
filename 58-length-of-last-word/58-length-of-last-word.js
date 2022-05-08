/**
 * @param {string} s
 * @return {number}
 */
let lengthOfLastWord = s => {
    let words = s.split(' ');
    let newWords = [];
    let newNewArr = []
    for(let i = 0; i < words.length; i++){
        if(words[i] !== ''){
            newWords.push(words[i])
        }
    }
    newNewArr.push(...newWords[newWords.length-1])
    return newNewArr.length
};