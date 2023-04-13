//Always Hungry

function alwaysHungry(arr){
    var foodFound = false;
    for(var i = 0; i < arr.length; i++){
        if(arr[i] == "food"){
            console.log("yummy");
            foodFound = true;
        }
    }
    if(!foodFound){
        console.log("I'm Hungry");
    }
}

alwaysHungry([3.14, "food", "pie", true, "food"]);
alwaysHungry([4, 1, 5, 7, 2]);

//High Pass Filter

function highPass(arr,cutOff){
    var newArr = [];
    for(var i = 0; i < arr.length; i++){
        if(arr[i] > cutOff){
            newArr.push(arr[i]);
        }
    }
    return newArr;
}

var result = highPass([6, 8, 3, 10, -2, 5, 9], 5);
console.log(result);

//Better than average

function betterThanAverage(arr){
    var sum = 0;
    var count = 0;
    var average = 0;
    var i = 0
    while(i < arr.length){
        sum += arr[i];
        i++
    }
    average = sum/arr.length;
    for(var j = 0; j < arr.length; j++){
        if(arr[j] > average){
            count++;
        }
    }
    return count;
}

var result = betterThanAverage([6, 8, 3, 10, -2, 5, 9]);
console.log(result);

//Array Reverse

function reverse(arr){
    var newArr = [];
    for(var i = arr.length - 1; i >= 0; i--){
        newArr.push(arr[i]);
    }
    return newArr;
}

var result = reverse(["a", "b", "c", "d", "e"]);
console.log(result); // we expect back ["e", "d", "c", "b", "a"]

//Array reverse without using a new array

function reverse(arr) {
    let temp;
    let numOfLoops = Math.floor(arr.length/2);
    for(let i = 0; i<=numOfLoops; i++){
        temp = arr[i];
        arr[i] = arr[arr.length-(i+1)];
        arr[arr.length-(i+1)] = temp;
    }
    return arr;
}


var result = reverse(["a", "b", "c", "d", "e"]);
console.log(result); // we expect back ["e", "d", "c", "b", "a"]

//Fibonacci Array

function fibonacciArray(n) {
    // the [0, 1] are the starting values of the array to calculate the rest from
    var fibArr = [0, 1];
    for(var i = 0; i < n - 2; i++){
        fibArr.push(fibArr[i]+fibArr[i+1]);
    }
    return fibArr;
}

var result = fibonacciArray(10);
console.log(result); // we expect back [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]

