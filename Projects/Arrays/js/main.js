// FOREACH
function doubleValuesArray(arr){
    var newArr = [];
    arr.forEach(function(value, index, array) {
        newArr.push(value * 2);
    });
    return newArr;
}

function onlyEvenValues(arr){
    var newArr = [];
    arr.forEach(function(value, index, array) {
        if(value % 2 === 0) 
            newArr.push(value);
    });
    return newArr;
}

function showFirstAndLast(arr){
    var newArr = [];
    arr.forEach(function(value, index, array) {
        newArr.push(value.charAt(0) + "" + value.charAt(value.length-1));
    });
    return newArr;   
}

function addKeyAndValue(arr,key,value){
    var newArr = [];
    arr.forEach(function(val, index, array) {
        newArr.push({
            'name' : val.name,
            [key] : value,
        });
    });
    return newArr;    
}


function vowelCount(str){
    var dict = {};
    var vowelArray = ["a","e","i","o","u"];
    var strArray = str.split('');
    strArray.forEach(function(value, index, array) {     
        for(var i = 0; i < vowelArray.length; i++) {
            var vowelToCheck = vowelArray[i]
            if(value.toLowerCase() === vowelToCheck) {
                if(dict[vowelToCheck] !== undefined)
                    dict[vowelToCheck] = dict[vowelToCheck] + 1;
                else 
                    dict[vowelToCheck] = 1;
            }
        }
    });
    return dict;
}

// MAPS 
function doubleValuesMap(arr){
    return arr.map(function(value, index, array) {
        return value * 2;
    });
}

function valTimesIndex(arr){
    return arr.map(function(value, index, array) {
        return value * index;
    });
}

function extractKey(arr, key){
    return arr.map(function(value, index, array) {
        if(value[key] !== undefined) {
            return value[key];
        }
    }); 
}

function extractFullName(arr){
    return arr.map(function(value, index, array) {
        var first = "";
        var last = "";
        if(value['first'] !== undefined) {
            first = value['first'];
        }
        if(value['last'] !== undefined) {
            last = value['last'];
        }
        return (first + " " + last).trim();
    }); 
}

// FILTERS

function filterByValue(arr, key){
    return arr.filter(function(value, index, array) {
        if(value[key] !== undefined) {
            return value;
        }
    });
}

function find(arr, searchValue){
    return arr.filter(function(value, index, array) {
        if(value === searchValue) {
            return value;
        }
    })[0];
}

function findInObj(arr, key, searchValue){
    return arr.filter(function(value, index, array) {
        if(value[key] === searchValue) {
            return value;
        }
    })[0];
}

function removeVowels(str){
    str = str.toLowerCase();
    var vowelArray = ['a','e','i','o','u'];
    return str.split('').filter(function(value, index, array) {
        if(!vowelArray.includes(value)) {
            return value;
        }
    }).join('');
}


function doubleOddNumbers(arr){
    return arr.filter(function(value, index, array) {
        if(value % 2 === 1) {
            return value;
        }
    }).map(function(value, index, array) {
        return value * 2;
    });
}


// arr.some(function(value, index, array) {
//    
//});
// arr.every(function(value, index, array) {
//    
//});

/*
Write a function called hasOddNumber which accepts an array and returns true if the array contains at least one odd number, otherwise it returns false.

Examples:
    hasOddNumber([1,2,2,2,2,2,4]) // true
    hasOddNumber([2,2,2,2,2,4]) // false
*/

function hasOddNumber(arr){
    
}

/*
Write a function called hasAZero which accepts a number and returns true if that number contains at least one zero. Otherwise, the function should return false

Examples:
    hasAZero(3332123213101232321) // true
    hasAZero(1212121) // false
*/

function hasAZero(num){
    
}

/*
Write a function called hasOnlyOddNumbers which accepts an array and returns true if every single number in the array is odd. If any of the values in the array are not odd, the function should return false. 

Examples:
    hasOnlyOddNumbers([1,3,5,7]) // true
    hasOnlyOddNumbers([1,2,3,5,7]) // false
*/

function hasOnlyOddNumbers(arr){
    
}

/*
Write a function called hasNoDuplicates which accepts an array and returns true if there are no duplicate values (more than one element in the array that has the same value as another). If there are any duplicates, the function should return false.

Examples:
    hasNoDuplicates([1,2,3,1]) // false
    hasNoDuplicates([1,2,3]) // true
*/

function hasNoDuplicates(arr){
    
}

/*
Write a function called hasCertainKey which accepts an array of objects and a key, and returns true if every single object in the array contains that key. Otherwise it should return false.

Examples:
    var arr = [
        {title: "Instructor", first: 'Elie', last:"Schoppik"}, 
        {title: "Instructor", first: 'Tim', last:"Garcia", isCatOwner: true}, 
        {title: "Instructor", first: 'Matt', last:"Lane"}, 
        {title: "Instructor", first: 'Colt', last:"Steele", isCatOwner: true}
    ]
    
    hasCertainKey(arr,'first') // true
    hasCertainKey(arr,'isCatOwner') // false
*/

function hasCertainKey(arr, key){
    
}

/*
Write a function called hasCertainValue which accepts an array of objects and a key, and a value, and returns true if every single object in the array contains that value for the specific key. Otherwise it should return false.

Examples:
    var arr = [
        {title: "Instructor", first: 'Elie', last:"Schoppik"}, 
        {title: "Instructor", first: 'Tim', last:"Garcia", isCatOwner: true}, 
        {title: "Instructor", first: 'Matt', last:"Lane"}, 
        {title: "Instructor", first: 'Colt', last:"Steele", isCatOwner: true}
    ]
    
    hasCertainValue(arr,'title','Instructor') // true
    hasCertainValue(arr,'first','Elie') // false
    
*/

function hasCertainValue(arr, key, searchValue){
    
}