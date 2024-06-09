// input
function hienthithongtin(){
    var input = document.getElementById("giatrinhap");
    console.log(input.value);
    //output : string

var output ='';
//process

output = input.value;
//xử lý kết quả lên giao diện 

var tagspanketqua = document.getElementById('kqht');
    tagspanketqua.innerHTML = "Kết quả: " + output;
}

