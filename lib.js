function avg(numbers) {
    let s = numbers.reduce((prev, curr) => prev + curr, 0)
    return s / numbers.length;
}

function prime(numbers) {
    if (numbers <= 1) {
        return false;
    }

    if (numbers === 2) {
        return true;
    }    

    for (let i = 2; i <= Math.sqrt(numbers); i++) {
        if (numbers % i === 0) {
            return false;
        }
    }
    
    return true;
}

function factorial(numbers) {
    
    if (numbers < 0 || numbers > 15) {
        console.log("Invalid Number: factorial");
        return -1;
    }

    let result = 1;
    for (let i = 1; i <= numbers; i++) {
        result *= i;
    }
    
    return result;
}

exports.avg = avg;
exports.prime = prime;
exports.factorial = factorial;