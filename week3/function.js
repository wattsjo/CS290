// Straight function call
console.log(factorial(5));

// Function definition call
console.log(factDef(6));

// Function declaration
function factorial(n) {
    if (n == 0) {
	return 1;
    } else if (n > 0) {
	return n * factorial(n-1);
    } else {
	return "undef";
    }
}

// Function definition
var factDef = function(n) {
    return factorial(n);
};
