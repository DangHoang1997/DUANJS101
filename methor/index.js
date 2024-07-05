function kiemtraSNT (number) { // input number 
    // output true or flase 
    var isPrime = true;
    for (var i = 2; i <= Math.sqrt(number); i++) {
      if (number % i === 0) {
        isPrime = false;
        break;
      }
    }
    return isPrime;


  }

  function tagID (id) {
    return document.getElementById(id);
  }
  function tagClass (className) {
    return document.getElementsByClassName(className);
  }
  function tagTagName (tagName) {
    return document.getElementsByTagName(tagName);
  }

  // tạo hàm con thêm ngôi sao 
  
  function addStars (number) {
    var stars = "";
    for (var i = 0; i < number; i++) {
      stars += "*";
    }
    return stars;
  }
 // tạo hàm con tự động tính tổng số trong chuỗi 
  function sumString (str) {
    var sum = 0;
    for (var i = 0; i < str.length; i++) {
      sum += str[i] * 1;
    }
    return sum;
  }
  // tạo hàm con tính tổng các số chẵn trong chuỗi 
  function sumEvenNumbers(str) {
    var sum = 0;
    for (var i = 0; i < str.length; i++) {
        if (str[i] % 2 === 0) {
            sum += parseInt(str[i]);
        }
    }
    return sum;
}
// tạo công thức tính giá grap


