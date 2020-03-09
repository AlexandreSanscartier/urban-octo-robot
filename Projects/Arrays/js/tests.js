describe("Arrays", function () {
    describe("ForEach double values", function () {
        it("doubles the values for the array [1,2,3]", function () {
            // Arrange
            var intArr = [1, 2, 3];
            var resultingArr = [2, 4, 6];

            // Act
            var doubleIntArr = doubleValuesArray(intArr);

            // Assert
            expect(doubleIntArr).toEqual(jasmine.arrayContaining(resultingArr));
        });
        it("doubles the values for the array [5,1,2,3,10]", function () {
            // Arrange
            var intArr = [5, 1, 2, 3, 10];
            var resultingArr = [10, 2, 4, 6, 20];

            // Act
            var doubleIntArr = doubleValuesArray(intArr);

            // Assert
            expect(doubleIntArr).toEqual(jasmine.arrayContaining(resultingArr));
        });
    });
    describe("ForEach even integers", function () {
        it("returns the even values for the array [1,2,3]", function () {
            // Arrange
            var intArr = [1, 2, 3];
            var resultingArr = [2];

            // Act
            var doubleIntArr = onlyEvenValues(intArr);

            // Assert
            expect(doubleIntArr).toEqual(jasmine.arrayContaining(resultingArr));
        });
        it("returns the even values for the array [5,1,2,3,10]", function () {
            // Arrange
            var intArr = [5, 1, 2, 3, 10];
            var resultingArr = [2, 10];

            // Act
            var doubleIntArr = onlyEvenValues(intArr);

            // Assert
            expect(doubleIntArr).toEqual(jasmine.arrayContaining(resultingArr));
        });
    });
    describe("ForEach string", function () {
        it("shows the first and last letter of each string in array ['colt','matt', 'tim', 'udemy']", function () {
            // Arrange
            var strArray = ['colt', 'matt', 'tim', 'udemy'];
            var resultingArr = ["ct", "mt", "tm", "uy"];

            // Act
            var result = showFirstAndLast(strArray);

            // Assert
            expect(result).toEqual(jasmine.arrayContaining(resultingArr));
        });
        it("shows the first and last letter of each string in array ['hi', 'goodbye', 'smile']", function () {
            // Arrange
            var strArray = ['hi', 'goodbye', 'smile'];
            var resultingArr = ['hi', 'ge', 'se'];

            // Act
            var result = showFirstAndLast(strArray);

            // Assert
            expect(result).toEqual(jasmine.arrayContaining(resultingArr));
        });
    });
    describe("ForEach string", function () {
        it("Adds the specified key and value to the names array", function () {
            // Arrange
            var namesArray = [{ name: 'Elie' }, { name: 'Tim' }, { name: 'Matt' }, { name: 'Colt' }];
            var key = 'title';
            var value = 'instructor';
            var resultingArr = [{ name: 'Elie', title: 'instructor' }, { name: 'Tim', title: 'instructor' }, { name: 'Matt', title: 'instructor' }, { name: 'Colt', title: 'instructor' }];

            // Act
            var result = addKeyAndValue(namesArray, key, value);

            // Assert
            expect(result).toEqual(jasmine.arrayContaining(resultingArr));
        });
    });
    describe("ForEach string", function () {
        it("Counts the number of vowels when no vowels", function () {
            // Arrange
            var sentence = 'hmmm';
            var correctResult = {};

            // Act
            var result = vowelCount(sentence);

            // Assert
            expect(result).toEqual(correctResult);
        });
        it("Counts the number of vowels when only one vowel", function () {
            // Arrange
            var sentence = 'Tim';
            var correctResult = {i:1};

            // Act
            var result = vowelCount(sentence);

            // Assert
            expect(result).toEqual(correctResult);
        });
        it("Counts the number of vowels with a combination of upper and lowercase", function () {
            // Arrange
            var sentence = 'I Am awesome and so are you';
            var correctResult = { i: 1, a: 4, e: 3, o: 3, u: 1 };

            // Act
            var result = vowelCount(sentence);

            // Assert
            expect(result).toEqual(correctResult);
        });
    });
});

describe("Maps", function() {
    describe("Double the integers in array", function() {
        it("Doubles the value of positive integers", function() {
            // Arrange
            var integerArray = [1,2,3];
            var doubledArray = [2,4,6];

            // Act
            var result = doubleValuesMap(integerArray);

            // Assert
            expect(result).toEqual(jasmine.arrayContaining(doubledArray));
        });
        it("Doubles the value of negative integers", function() {
            // Arrange
            var integerArray = [-1,-2,-3];
            var doubledArray = [-2,-4,-6];

            // Act
            var result = doubleValuesMap(integerArray);

            // Assert
            expect(result).toEqual(jasmine.arrayContaining(doubledArray));
        });
    });
    describe("multiples the integers in array by their index", function() {
        it("Doubles the value of positive integers", function() {
            // Arrange
            var integerArray = [1,2,3];
            var doubledArray = [0,2,6];

            // Act
            var result = valTimesIndex(integerArray);

            // Assert
            expect(result).toEqual(jasmine.arrayContaining(doubledArray));
        });
        it("Doubles the value of negative integers", function() {
            // Arrange
            var integerArray = [1,-2,-3];
            var doubledArray = [0,-2,-6];

            // Act
            var result = valTimesIndex(integerArray);

            // Assert
            expect(result).toEqual(jasmine.arrayContaining(doubledArray));
        });
    });
    describe("extracts the value of the given key in an array", function() {
        it("Extracts the value in the key", function() {
            // Arrange
            var objectArray = [{name: 'Elie'}, {name: 'Tim'}, {name: 'Matt'}, {name: 'Colt'}]; 
            var key = 'name'
            var extractedKeyArray = ['Elie', 'Tim', 'Matt', 'Colt'];

            // Act
            var result = extractKey(objectArray, key);

            // Assert
            expect(result).toEqual(jasmine.arrayContaining(extractedKeyArray));
        });    
    });
    describe("extracts the first and last name in an array of objects", function() {
        it("Extracts the first and last name", function() {
            // Arrange
            var objectArray = [{first: 'Elie', last:"Schoppik"}, {first: 'Tim', last:"Garcia"}, {first: 'Matt', last:"Lane"}, {first: 'Colt', last:"Steele"}]; 
            var key = 'name'
            var extractedKeyArray = ['Elie Schoppik', 'Tim Garcia', 'Matt Lane', 'Colt Steele'];

            // Act
            var result = extractFullName(objectArray, key);

            // Assert
            expect(result).toEqual(jasmine.arrayContaining(extractedKeyArray));
        });    
    });
});

describe("Filter", function() {
    describe("Filters by value", function() {
        it("filters by provided value", function() {
            // Arrange
            var initialArray = [{first: 'Elie', last:"Schoppik"}, {first: 'Tim', last:"Garcia", isCatOwner: true}, {first: 'Matt', last:"Lane"}, {first: 'Colt', last:"Steele", isCatOwner: true}];
            var key = 'isCatOwner';
            var expectedResult = [{first: 'Tim', last:"Garcia", isCatOwner: true}, {first: 'Colt', last:"Steele", isCatOwner: true}];

            // Act
            var result = filterByValue(initialArray, key);

            // Assert
            expect(result).toEqual(jasmine.arrayContaining(expectedResult));
        });
    });

    describe("Filters to find value in array", function() {
        it("returns the value if found", function() {
            // Arrange
            var initialArray = [1,2,3,4,5];
            var value = 3;
            var expectedResult = 3;

            // Act
            var result = find(initialArray, value);

            // Assert
            expect(result).toEqual(expectedResult);
        });
        it("returns undefined if no value is found", function() {
            // Arrange
            var initialArray = [1,2,3,4,5];
            var value = 10;
            var expectedResult = undefined;

            // Act
            var result = find(initialArray, value);

            // Assert
            expect(result).toEqual(expectedResult);
        });
    });

    describe("Filters to first found value with key & value", function() {
        it("returns the value if found", function() {
            // Arrange
            var initialArray = [{first: 'Elie', last:"Schoppik"}, {first: 'Tim', last:"Garcia", isCatOwner: true}, {first: 'Matt', last:"Lane"}, {first: 'Colt', last:"Steele", isCatOwner: true}];
            var key = 'isCatOwner';
            var value = true;
            var expectedResult = {first: 'Tim', last:"Garcia", isCatOwner: true};

            // Act
            var result = findInObj(initialArray, key, value);

            // Assert
            expect(result).toEqual(expectedResult);
        });
    });
    
    describe("Filters out vowels", function() {
        it("returns a string without the vowels lowercase", function() {
            // Arrange
            var sentence = "Elie";
            var expectedResult = "l";

            // Act
            var result = removeVowels(sentence);

            // Assert
            expect(result).toEqual(expectedResult);
        });
        it("returns a string without the vowels uppercase", function() {
            // Arrange
            var sentence = "TIM";
            var expectedResult = "tm";

            // Act
            var result = removeVowels(sentence);

            // Assert
            expect(result).toEqual(expectedResult);
        });
        it("returns a that contains no vowels", function() {
            // Arrange
            var sentence = "ZZZZZZ";
            var expectedResult = "zzzzzz";

            // Act
            var result = removeVowels(sentence);

            // Assert
            expect(result).toEqual(expectedResult);
        });
    });
    describe("Filters double the odd numbers", function() {
        it("array of doubled odd numbers", function() {
            // Arrange
            var initialArray = [1,2,3,4,5];
            var expectedResult = [2,6,10];

            // Act
            var result = doubleOddNumbers(initialArray);

            // Assert
            expect(result).toEqual(jasmine.arrayContaining(expectedResult));
        });
        it("returns empty array if no odd numbers found", function() {
            // Arrange
            var initialArray = [4,4,4,4,4];
            var expectedResult = [];

            // Act
            var result = doubleOddNumbers(initialArray);

            // Assert
            expect(result).toEqual(jasmine.arrayContaining(expectedResult));

        });
    });
});