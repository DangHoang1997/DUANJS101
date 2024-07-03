document.getElementById("btnTinhTien").onclick = function () {
  // //* input
  // nhap so tien can thanh toan
  //  cần tạo một nút nhập tổng số tiền cần thanh toán
  // tông số tiền cần thanh toán = number; *//

  // input 2 so tien tip khach hang nhap
  // input 2  = number
  // so nguoi tip

  // process lay thong tin tu o tong thanh toan nhan voi so phan tram tip

  // output so tien tip tren 1 nguoi

  let tongTienThanhToan = document.getElementById("tongTienThanhToan").value;
  let phanTramTip = document.getElementById("phanTramTip").value;


  let soNguoiTip = document.getElementById('soNguoiTip').value;

q = parseInt(tongTienThanhToan);
k =parseInt(phanTramTip);
o = parseInt(soNguoiTip);

output = (q*(k/100)) / o;
//   console.log(tongTienThanhToan)
//   console.log(phanTramTip)
//   console.log(soNguoiTip)

let tagspan = document.getElementById('tienTipTrenNguoi');
tagspan.innerHTML= output;



};
