const lib = require("./lib");

let command = process.argv[2];

let number = process.argv
    .slice(3, process.argv.length)
    .map((n) => parseFLoat(n));

let result;
switch (command) {
    case "avg":
        result = lib.avg(number);
        break;
    case "prime":
        result = lib.prime(number);
        break;
    case "factorial":
        result = lib.factorial(number);
        if (result === -1)
            process.exit(1);
        break;
    default:
        console.log("wrong command!");
        process.exit(1);
}

console.log(result);