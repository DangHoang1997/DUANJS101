console.log('hello');


// biến sẽ gọi là variable hoặc data
// var tenBien = duLieu Camel key


// string type 
var fullName = "Nguyen Van A";
console.log(fullName);
// number typpe 
var age = 18;
console.log(age);
// boolean type

var isMale = true;
var isFemale = false;

// null type

var isMarried =null;
var is_married = undefined;


console.log(isMarried);

// undefined type 
console.log(is_married);

var n1 = 2+2;

console.log("n1:", n1);
console.log("n1:", n1 + n1)

var n2 = 5;

var n3 = n2 +5;
console.log(n3);
var n4 = 100 / n2; 
console.log(n4)
var n5 = n2 * 2;
console.log(n5);
var n6 = 97 % n2;
console.log(n6);

// khai bao va tao gia tri

var userName = "Alice";


// update gia tri bien

userName = "Bob";

console.log(userName);

// code js chay tu tren xuong duoi
// khi gan gia tri moi cho bien thi gia tri moi se duoc su dung

// cộng dồn 

var n6 = 5;

n6 += 15;
console.log(n6);

var n7 = 10;
 n7 *= 10;

 console.log(n7);

//  tăng giảm 1 đơn vị
var count = 0;
count ++;
count ++; 
++count;
++count;
++count;

count = 0;
console.log(count);

var a = 5;

var b = a++ + 5; // phep tang va phep cong
// cộng trước tăng sau 

console.log(b)

var c = ++a +5;// cộng rồi mới in 
console.log(c);


var d = 2;

var e = d++ +2; //in rồi mới cộng

console.log(d) ;
console.log(e) ;






// blug cu phap bi do le man hinh 
//  bug logic
// code sẽ chạy 1 lần không chạy lại 

// bai tap 

var a , b , c;

a = 10;
a += a;

console.log(a);

b = ++a +5;
c = a++ +5;

console.log(a);

a = 0;
console.log(b);
console.log(c);