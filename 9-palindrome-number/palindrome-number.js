/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    const str=x.toString()
    const reversedNum=str.split('').reverse().join('');
    return str===reversedNum ? 1 : 0
};