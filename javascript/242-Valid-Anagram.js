/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    let map = {};
    
    if (s.length !== t.length) {
        return false;
    }
    
    for (let i = 0; i < s.length; i++) {
        if (map[s[i]]) {
            map[s[i]]++;
        } else {
            map[s[i]] = 1;
        }
    }
    
    for (let i = 0;  i < t.length; i++) {
        if (map[t[i]]) {
            map[t[i]]--;
        } else {
            return false;
        }
    }
    
    return true;
    
    
    
    
};

/*
Brute Force, straight forward
1-are words the same length? -> no short circuit false condition
2-sort characters to compare
 a).split('') method converts string to array
 b).sort() method sorts the array, we don't care what the values are,
 we just want to sort them to compare and return boolean
 c.join('') converts the array back to a string to compare using === to
confirm they are the same values
3-compare sorted, reconstructed value -> return Boolean
*/

var isAnagram = function(s, t) {
    if(s.length != t.length) return false;
        // Impossible if words are not the same length
    sSorted = s.split('').sort().join('');
    tSorted = t.split('').sort().join('');
   
    return sSorted === tSorted;
};