function toggleLight(){
    var img = document.getElementById("Light");
    img.src = "./img/BAT_TAT_DEN/pic_bulbon.gif";
    console.log(img);
}

function toggleoff(){
    var img = document.getElementById("Light");
    img.src = "./img/BAT_TAT_DEN/pic_bulboff.gif";
    console.log(img);
}

// phạm vi hoạt động của một biến global scope 
// global scope toàn cục 
// local scope  cục bộ 
// biến được tạo trong funcition thì chỉ sử dụng được trong funcition 