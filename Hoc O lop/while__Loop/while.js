function hienthikhoidong() {
    var number = document.getElementById('nhapso').value * 1;
    var i = 1;
    var count = 0;
    var contentHTML = "";
    while (number > i) {
        
// bước nhảy    
        count++;
        number = Math.floor(number / 2);
        // hành động in 
        var ptag = `<p>Count : ${count} : ${number}</p>`

        contentHTML =contentHTML + ptag;





       

        
        
    }
    alert("Kết thúc vòng lặp");

    document.getElementById('ketqua').innerHTML = contentHTML;
    console.log(`count : ${count} ,number ${number}`);
}

