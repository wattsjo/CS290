// deepEqual.js
// Contains the deepEqual function, which compares two arguments
// by value and, if objects, recursively by property value
// Prompt and hints from Eloquent Javascript, 2nd ed.

function deepEqual(x, y) {
    if (((typeof(x) == "object") && (x != null)) &&
	((typeof(y) == "object") && (y != null))) {
	var xPropCount = 0;
	var yPropCount = 0;
	for (p in x) {
	    xPropCount++;
	}
	for (p in y) {
	    yPropCount++;
	}
	if (xPropCount != yPropCount) {
	    return false;
	} else {
	    for (p in x) {
		if (!deepEqual(x[p], y[p])) {
		    return false;
		}
	    }
	}
    } else if (x !== y) {
	return false;
    }
    return true;
}

// Testing deepEqual()

var test1 = {
    count: 2,
    phrase: "Hello",
    emObj: {thing: 1}
};

var test2 = {
    count: 2,
    phrase: "Hello",
    emObj: {thing: 1}
};

console.log(deepEqual(test1, test2));
