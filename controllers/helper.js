function valueInput() {
  let _maSo = document.getElementById("idMaSo").value;
  let _name = document.getElementById("hoTen").value;
  let _email = document.getElementById("email").value;
  let _diaChi = document.getElementById("diaChi").value;
  let _diemToan = document.getElementById("diemToan").value;
  let _diemLi = document.getElementById("diemLi").value;
  let _diemHoa = document.getElementById("diemHoa").value;
  let _soNgayLamViec = document.getElementById("soNgayLamViec").value;
  let _luongTheoNgay = document.getElementById("luongTheoNgay").value;
  let _tenCongTy = document.getElementById("tenCongTy").value;
  let _triGiaHoaDon = document.getElementById("triGiaHoaDon").value;
  let _danhGia = document.getElementById("danhGia").value;
  let valid = true;
  valid =
    emptyTest(_maSo, "invalidID") &
    emptyTest(_name, "invalidTen") &
    emptyTest(_email, "invalidEmail") &
    emptyTest(_diaChi, "invalidDiaChi") &
    emptyTest(_diemToan, "invalidDiemToan") &
    emptyTest(_diemLi, "invalidDiemLi") &
    emptyTest(_diemHoa, "invalidDiemHoa") &
    emptyTest(_soNgayLamViec, "invaliNgayLamViec") &
    emptyTest(_luongTheoNgay, "invalidLuongTheoNgay") &
    emptyTest(_tenCongTy, "invalidTenCongTy") &
    emptyTest(_triGiaHoaDon, "invalidHoaDon") &
    emptyTest(_danhGia, "invalidDanhGia");
  // console.log(valid);
  valid = checkAccount(_maSo, "invalidID");
  valid = checkName(_name, "invalidTen");
  valid = checkEmail(_email, "invalidEmail");
  valid = checkDiem(_diemToan, "invalidDiemToan");
  valid = checkDiem(_diemLi, "invalidDiemLi");
  valid = checkDiem(_diemHoa, "invalidDiemHoa");
  // valid = checkSoNgayLam(_soNgayLamViec, "invaliNgayLamViec");
  // valid = checkLuongTheoNgay(_luongTheoNgay, "invalidLuongTheoNgay");

  if (!valid) {
    return;
  }
}
// in ra pdf
function printDiv(divName) {
  var printContents = document.getElementById(divName).innerHTML;
  var originalContents = document.body.innerHTML;
  document.body.innerHTML = printContents;
  window.print();
  document.body.innerHTML = originalContents;
}
