module.exports = function reverse (n) {
    let newString = n.toString().split('').reverse().join('');
    let newArray = parseInt(newString)
    
    return newArray;
}
