

function hoanghaidang() {
    var input1 = document.getElementById('h1998').value;
   var input2 = document.getElementById('h1997').value;





   tagspan = document.getElementById('ketqua');
   tagspan.innerHTML = input1 + ' ' + input2;

   tagspan.style.background = 'red';
   tagspan.style.fontSize = '30px';
   tagspan.style.fontWeight = '900';

console.log(` tai khoan la ${input1}  mat khau la ${input2}`);
   

   

    
    
    
}