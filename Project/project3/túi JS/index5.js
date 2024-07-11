let arrNumber = [1,2,3,4,5];
let start = 0;
let end = arrNumber.length-1;
while(start<end){
    let temp = arrNumber[start];
    arrNumber[start] = arrNumber[end];
    arrNumber[end] = temp;
    start ++;
    end --;
    console.log(`đây là chỉ số  của start   ${start}`);
    console.log(`đây là chỉ số  của end   ${end}`);
    // console.log(` đây là giá trị của end${end}`);

}
console.log(`mảng đảo ngược là ${arrNumber}`);