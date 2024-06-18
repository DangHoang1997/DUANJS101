// const không thay đổi giá trị


// Mô hình 3 khối



// đầu vào  chiều dài 2 cạnh 3cm , 4cm

// các bước xử lý process:
// step 1
// step 2
// step 3


// đầu ra : chieu dai canh huyen 5cm


// bài 1
var edge1 = 3;
var edge2 = 4;
var edge3 = null;


edge3 = Math.sqrt((edge1*edge1) + (edge2*edge2));
console.log("edge3 = " + edge3);

// bài 2 


var number = 1234;
hangNghin = Math.floor(number/1000);
hangTram = Math.floor(number/100%10);
hangChuc = Math.floor((number%100)/10);
hangdonvi = Math.floor(number%10);

tongKySo = hangTram + hangChuc + hangdonvi + hangNghin;

console.log(tongKySo);



