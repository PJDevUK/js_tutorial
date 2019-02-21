module.exports.counter = function(arr) {
    return 'There are ' + arr.length + 'elements'
}

module.exports.adder  = function(a,b){
    return `The sum of the 2 numbers is ${a+b}`
}

module.exports.pi = 3.142

/* or
module.exports = {
    counter: counter,
    adder: adder,
    pi: pi
}



