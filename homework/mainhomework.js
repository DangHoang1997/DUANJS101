function checkDataType(value){
    return typeof value;
}
console.log(checkDataType(42));
console.log(checkDataType('hello'));
console.log(checkDataType(true));
console.log(checkDataType([1,2,3]));
console.log(checkDataType({name: "alice"}));

function convertToString(value) {
    return String(value);
}

// Ví dụ sử dụng
console.log(convertToString(42)); // "42"
console.log(convertToString(true)); // "true"
console.log(convertToString([1, 2, 3])); // "1,2,3"
console.log(convertToString({name: "Alice"})); // "[object Object]"

function sum ( a, b) {
    return a + b;
}
console.log(sum(5,3));
console.log(sum(10,20));


function sum (a,b,c) {
    return a+b+c;
}
console.log(sum(10,20,30))


function sum (a,b,c,d) {

    return a+b+c+d;
}
console.log(sum(10,20,30,40));


// bai toan kiem tra so chan va so le 

function isEven(number) {

    return number%2 ===0;
}
console.log(isEven(1357));
console.log(isEven(2468));


function isEven(number) {

    return number%10 ===0;


}
console.log(isEven(100));
console.log(isEven(235));


// tim so lon nhat trong mang

function findMax(arr){
    let max = arr[0];
    for (let i = 1; i < arr. length; i++ ){
        if (arr[i]> max){
            max = arr[i];
        }
    }
    return max;
}


function findMax(arr) {

    let max = arr[0];
    for (let i = 1; i < arr.length ; i++){
        if ( arr[i] > max) {
            max = arr[i];
        }
    }
    return max;
}


console.log(findMax([1,10,20,50]));
console.log(findMax([1,3,4,100]));
  

function sum (a,b){
    return a+b
}
console.log(sum(1,3))
// làm lại bài toán tính tổng hai số trong chuỗi

function sum (a,b) {
    return a +b;
}
console.log(sum(1,3));