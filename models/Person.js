class Person {
  constructor() {
    this.idMaSo = "";
    this.hoTen = "";
    this.email = "";
    this.diaChi = "";
    this.chonViTri = "";
  }
}
class SinhVien extends Person {
  constructor() {
    super();
    this.diemToan = 0;
    this.diemLi = 0;
    this.diemHoa = 0;
  }
  tinhDiemTrungBinh = () => {
    return (+this.diemToan + + this.diemHoa + +this.diemLi) / 3;
  };
}
class NhanVien extends Person {
  constructor() {
    super();
    this.soNgayLamViec = 0;
    this.luongTheoNgay = 0;
  }
  tinhLuong = () => {
    return this.luongTheoNgay * this.soNgayLamViec;
  };
}

class KhachHang extends Person {
  constructor() {
    super();
    this.tenCongTy = "";
    this.triGiaHoaDon = "";
    this.danhGia = "";
  }
}
export { Person, SinhVien, NhanVien, KhachHang };
