// var title = document.getElementById('title');
// title.innerHTML = 'HoangHaiDang';

// var nhapLieu = document.getElementById('nhapLieu');

// nhapLieu.value = 'Hello Dang';
// nhapLieu.style.backgroundColor = 'yellow';
// title.style.color = 'red'


// function handleClick() {

//     alert('Hello');
// }


// document.getElementById('hoanghaidang').onclick = function () {
//     alert('Hello');
// }


// dom thẻ input




        function hoanghaidang() {
            var username = document.getElementById('username').value;
            var password = document.getElementById('password').value;
            thongtin = username + ' ' + password;

            var tagspan = document.getElementById('ketqua');
            tagspan.innerHTML = thongtin;
        };







