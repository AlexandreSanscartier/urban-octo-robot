// FOREACH
function doubleValuesArray(arr) {
    var newArr = [];
    arr.forEach(function (value, index, array) {
        newArr.push(value * 2);
    });
    return newArr;
}

function onlyEvenValues(arr) {
    var newArr = [];
    arr.forEach(function (value, index, array) {
        if (value % 2 === 0) newArr.push(value);
    });
    return newArr;
}

function showFirstAndLast(arr) {
    var newArr = [];
    arr.forEach(function (value, index, array) {
        newArr.push(value.charAt(0) + "" + value.charAt(value.length - 1));
    });
    return newArr;
}

function addKeyAndValueForEach(arr, key, value) {
    var newArr = [];
    arr.forEach(function (val, index, array) {
        newArr.push({
            name: val.name,
            [key]: value
        });
    });
    return newArr;
}

function vowelCountForEach(str) {
    var dict = {};
    var vowelArray = ["a", "e", "i", "o", "u"];
    var strArray = str.split("");
    strArray.forEach(function (value, index, array) {
        for (var i = 0; i < vowelArray.length; i++) {
            var vowelToCheck = vowelArray[i];
            if (value.toLowerCase() === vowelToCheck) {
                if (dict[vowelToCheck] !== undefined)
                    dict[vowelToCheck] = dict[vowelToCheck] + 1;
                else dict[vowelToCheck] = 1;
            }
        }
    });
    return dict;
}

// MAPS
function doubleValuesMap(arr) {
    return arr.map(function (value, index, array) {
        return value * 2;
    });
}

function valTimesIndex(arr) {
    return arr.map(function (value, index, array) {
        return value * index;
    });
}

function extractKey(arr, key) {
    return arr.map(function (value, index, array) {
        if (value[key] !== undefined) {
            return value[key];
        }
    });
}

function extractFullName(arr) {
    return arr.map(function (value, index, array) {
        var first = "";
        var last = "";
        if (value["first"] !== undefined) {
            first = value["first"];
        }
        if (value["last"] !== undefined) {
            last = value["last"];
        }
        return (first + " " + last).trim();
    });
}

// FILTERS

function filterByValue(arr, key) {
    return arr.filter(function (value, index, array) {
        if (value[key] !== undefined) {
            return value;
        }
    });
}

function find(arr, searchValue) {
    return arr.filter(function (value, index, array) {
        if (value === searchValue) {
            return value;
        }
    })[0];
}

function findInObj(arr, key, searchValue) {
    return arr.filter(function (value, index, array) {
        if (value[key] === searchValue) {
            return value;
        }
    })[0];
}

function removeVowels(str) {
    str = str.toLowerCase();
    var vowelArray = ["a", "e", "i", "o", "u"];
    return str
        .split("")
        .filter(function (value, index, array) {
            if (!vowelArray.includes(value)) {
                return value;
            }
        })
        .join("");
}

function doubleOddNumbers(arr) {
    return arr
        .filter(function (value, index, array) {
            if (value % 2 === 1) {
                return value;
            }
        })
        .map(function (value, index, array) {
            return value * 2;
        });
}

// EVERY & SOME

function hasOddNumber(arr) {
    return arr.some(function (value, index, array) {
        return value % 2 === 1;
    });
}

function hasAZero(num) {
    var arr = num.toString().split("");
    return arr.some(function (value, index, array) {
        return value === "0";
    });
}

function hasOnlyOddNumbers(arr) {
    return arr.every(function (value, index, array) {
        return value % 2 === 1;
    });
}

function hasNoDuplicates(arr) {
    var dict = {};
    return arr.every(function (value, index, array) {
        if (dict[value] === undefined) {
            dict[value] = 1;
        } else {
            return false;
        }
        return true;
    });
}

function hasCertainKey(arr, key) {
    return arr.every(function (value, index, array) {
        return value[key] !== undefined;
    });
}

function hasCertainValue(arr, key, searchValue) { 
    return arr.every(function (value, index, array) {
        return value[key] === searchValue;
    });
}

// REDUCE

/*
Write a function called extractValue which accepts an array of objects and a key and returns a new array with the value of each object at the key.

Examples:
    var arr = [{name: 'Elie'}, {name: 'Tim'}, {name: 'Matt'}, {name: 'Colt'}]
    extractValue(arr,'name') // ['Elie', 'Tim', 'Matt', 'Colt']
*/

function extractValue(arr, key){
    return arr.reduce(function(accumulator, nextValue, index, array) {
        accumulator.push(nextValue[key]);
        return accumulator;
    }, []);
}

function vowelCount(str){
    var vowelsArray = "aeiou".split("");
    return str.toLowerCase().split("").reduce(function(accumulator, nextValue, index, array) {
        nextValue = nextValue.trim();
        if(vowelsArray.includes(nextValue)) {
            if(nextValue in accumulator) {
                accumulator[nextValue]++;
            } else {
                accumulator[nextValue] = 1;
            }
        }
        return accumulator;
    }, {});
}

function addKeyAndValue(arr, key, value){
    return arr.reduce(function(accumulator, nextValue, index, array) {
        accumulator.push({
            [key] : value,
            name : nextValue.name,
        });
        return accumulator;
    }, []);
}

/*
Write a function called partition which accepts an array and a callback and returns an array with two arrays inside of it. The partition function should run the callback function on each value in the array and if the result of the callback function at that specific value is true, the value should be placed in the first subarray. If the result of the callback function at that specific value is false, the value should be placed in the second subarray. 

Examples:
    
    function isEven(val){
        return val % 2 === 0;
    }
    
    var arr = [1,2,3,4,5,6,7,8];
    
    partition(arr, isEven) // [[2,4,6,8], [1,3,5,7]];
    
    function isLongerThanThreeCharacters(val){
        return val.length > 3;
    }
    
    var names = ['Elie', 'Colt', 'Tim', 'Matt'];
    
    partition(names, isLongerThanThreeCharacters) // [['Elie', 'Colt', 'Matt'], ['Tim']]
*/

function partition(arr, callback){
    return arr.reduce(function(accumulator, nextValue) {
        console.log(accumulator);
        if(accumulator.length === 0) {
            accumulator.push([]);
            accumulator.push([]);
        }

        if(callback(nextValue)) {
            accumulator[0].push(nextValue);
        } else {
            accumulator[1].push(nextValue);
        }

        return accumulator;
    }, []);
}