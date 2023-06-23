import removeVietnameseTones from "../controllers/keysearch.js";
import { SinhVien, NhanVien, KhachHang } from "./Person.js";

export default class ListCompilation {
  constructor() {
    this.arr = [];
  }
  addPerson(person) {
    this.arr.push(person);
  }
  renderGiaoDien() {
    let content = this.arr.map((item, index) => {
      let abc;
      if (item.diemLi) {
        var sinhVien = new SinhVien();
        Object.assign(sinhVien, item);
        abc = "Điểm Trung Bình là :" + sinhVien.tinhDiemTrungBinh();
      } else if (item.soNgayLamViec) {
        var nhanVien = new NhanVien();
        Object.assign(nhanVien, item);
        abc = "Tổng lương là:" + nhanVien.tinhLuong();
      } else if (item.tenCongTy) {
        var khachHang = new KhachHang();
        Object.assign(khachHang, item);
        abc = `-công ty : 
          ${item.tenCongTy}
          -Đánh giá:
          ${item.danhGia}`;
      }
      let { idMaSo, hoTen, email, diaChi, chonViTri } = item;
      return ` 
      <tr >
      <td>${idMaSo}</td>
      <td>${hoTen}</td>
      <td>${email}</td>
      <td>${diaChi}</td>
      <td>${abc}</td>
      <td>${chonViTri}</td>
      <td><button class="btn btn-danger" onclick="deletePerson('${idMaSo}')">Xoá</button>
      <button class="btn btn-warning" onclick="getInforPerson('${idMaSo}')">Sửa</button>  </td>
      </tr>`;
    });
    document.getElementById("tbodyForm").innerHTML = content;
    // console.log(content);
  }
  saveLocal() {
    localStorage.setItem("arr", JSON.stringify(this.arr));
  }
  getLocal() {
    let personLocal = JSON.parse(localStorage.getItem("arr"));
    if (personLocal) {
      this.arr = [...personLocal];
      this.renderGiaoDien();
    }
  }
  deletePerson(idMaSo) {
    let index = this.arr.findIndex((item) => item.idMaSo == idMaSo);
    if (index != -1) {
      this.arr.splice(index, 1);
      this.renderGiaoDien();
      this.saveLocal();
    }
  }
  getInforPerson(idMaSo) {
    let person = this.arr.find((item) => item.idMaSo == idMaSo);
    console.log(person);
    if (person) {
      document.getElementById("btnThem").click();
      let arrInput = document.querySelectorAll("#controlForm input");
      console.log(arrInput);
      for (let item of arrInput) {
        let { id } = item;
        item.value = person[id];
      }
    }
  }
  resetvalue() {
    let arrInput = document.querySelectorAll("#controlForm input");
    for (let item of arrInput) {
      item.value = "";
      //  document.querySelector("#controlForm input ,select #sinhVien,select #nhanVien,select #khachHang").style.display="none";
    }
  }
  editPerson(person) {
    let index = this.arr.findIndex((item) => item.idMaSo == person.idMaSo);
    console.log(index);
    if (index != -1) {
      this.arr[index] = person;
      this.renderGiaoDien();
      this.saveLocal();
      document.getElementById("btnClose").click();
    }
  }
  searchPerson(keyWord) {
    let newKey = removeVietnameseTones(keyWord);
    let arrTimKiem = this.arr.filter((item) => {
      let tenNguoiMoi = removeVietnameseTones(item.hoTen);
      return tenNguoiMoi
        .toLowerCase()
        .trim()
        .includes(newKey.toLowerCase().trim());
    });
    console.log(arrTimKiem);
  }
  sapXepKiTu() {
    let value = document.getElementById("sapXep").value;
    console.log(value);
    this.arr.sort((a, b) => {
      if (value === "AZ") {
        return a.hoTen.localeCompare(b.hoTen);
      }
      if (value === "ZA") {
        return b.hoTen.localeCompare(a.hoTen);
      }
    });
    this.renderGiaoDien();
    // console.log(this.ListPerson);
  }
  showTungLoai() {
    let loaiPerson = document.getElementById("selLoai").value;
    let ketQuaSort = this.arr.filter((item) => {
      return item.chonViTri == loaiPerson;
    });
    console.log(ketQuaSort);
    console.log(loaiPerson);
    if (loaiPerson == "all") {
      this.renderGiaoDien(this.arr);
    } else {
      this.renderGiaoDien(ketQuaSort);
    }
  }
}
