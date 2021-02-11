//1.Array Slice

let foods = ['pizza', 'burger', 'fingerChips', 'donuts', 'springRoll'];

var modifiedFood = foods.slice(1, 4);
console.log(foods);
console.log(modifiedFood);

//2: Array Splice
var modifiedFood = foods.splice(2, 0, 'noodles', 'icecream');
console.log(foods);


//3: Filter
var numberArray = [12, 324, 213, 4, 2, 3, 45, 4234];
var isEven = numberArray.filter(function (num) {
    if (num % 2 === 0) {
        return num;
    }
});
console.log(isEven);

function isPrime(num) {
    if (num === 1) {
        return false;
    } else if (num === 2) {
        return true;
    } else {
        for (let i = 2; i < num; i++) {
            if (num % i === 0) {
                return false;
            }
        }
        return true;
    }
}
console.log(numberArray.filter(isPrime));

//Function #4: Reject

function notPrime(numberArray) {
    let notPrimeNumber = numberArray.filter(function (num) {
        for (i = 2; i <= Math.sqrt(num); i++) {
            if (num % i === 0)
                return true;
        }
        return false;
    })
    console.log(notPrimeNumber);
}

//Function #5: Lambda

var numberArray = [12, 324, 213, 4, 2, 3, 45, 4234];
var isEven = (num) => numberArray.filter(num => (num % 2) === 0);
console.log(isEven(numberArray));

//Function #6: Map

const myArray = [11, 34, 20, 5, 53, 16];
const findSquareOfNumbers = (x) => myArray.map(x => {
    return x * x;
})
console.log(findSquareOfNumbers(myArray));

//Function #7: Reduce

const myArray = [2, 3, 5, 10];

function multiply(array) {
    let mulValue = array.reduce(function (initial, item) {
        return initial * item
    }, 1)
    console.log("multiplication value of all number in the given aaray:", mulValue)

}
multiply(myArray);