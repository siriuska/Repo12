function myCounter(n) {
    return n < 1 ? [] : [n, ...myCounter(n - 1)];
}

console.log(myCounter(-1));
console.log(myCounter(10));
console.log(myCounter(5));

module.exports = myCounter;