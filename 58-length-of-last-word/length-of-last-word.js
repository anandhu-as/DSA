/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    let index = s.length - 1;
    let length = 0;

    while (index >= 0 && s[index] === ' ') index--;

    while (index >= 0 && s[index] !== ' ') {
        length++;
        index--;
    }

    return length;
};