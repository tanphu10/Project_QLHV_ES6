import { SinhVien, NhanVien, KhachHang } from "../models/Person.js";
import ListCompilation from "../models/ListPerson.js";

let selectElemen = document.getElementById("chonViTri");
let displaySv = document.getElementById("sinhVien");
let displayNv = document.getElementById("nhanVien");
let displayKh = document.getElementById("khachHang");
selectElemen.addEventListener("change", () => {
  let changeABC = selectElemen.value;
  if (changeABC == "SinhVien") {
    displaySv.style.display = "block";
    displayNv.style.display = "none";
    displayKh.style.display = "none";
  } else if (changeABC == "NhanVien") {
    displaySv.style.display = "none";
    displayKh.style.display = "none";
    displayNv.style.display = "block";
    // return;W
  } else if (changeABC == "KhachHang") {
    displayKh.style.display = "block";
    displayNv.style.display = "none";
    displaySv.style.display = "none";
  } else if (changeABC == "ViTri") {
    displayKh.style.display = "none";
    displayNv.style.display = "none";
    displaySv.style.display = "none";
  }
});

// thêm sự kiện person
let listPerson = new ListCompilation();
listPerson.getLocal();

document.getElementById("themPerson").addEventListener("click", () => {
  let arrInput = document.querySelectorAll(
    "#controlForm input, #controlForm select"
  );
  console.log(arrInput);
  let person;
  let changeABC = document.getElementById("chonViTri").value;
  if (changeABC == "SinhVien") {
    person = new SinhVien();
  } else if (changeABC == "NhanVien") {
    person = new NhanVien();
  } else if (changeABC == "KhachHang") {
    person = new KhachHang();
  }
  for (let item of arrInput) {
    let { id, value } = item;
    person[id] = value;
  }
  console.log(person);
  let userMember = valueInput();
  listPerson.addPerson(person);
  listPerson.saveLocal();
  listPerson.resetvalue();
  listPerson.renderGiaoDien();
});
window.deletePerson = (idMaSo) => {
  listPerson.deletePerson(idMaSo);
};
window.getInforPerson = (idMaSo) => {
  listPerson.getInforPerson(idMaSo);
};

document.getElementById("btnCapNhat").onclick = () => {
  let arrInput = document.querySelectorAll(
    "#controlForm input, #controlForm select"
  );
  console.log(arrInput);
  let person;
  // let changeABC = document.getElementById("chonVitri").value;
  let changeABC = document.getElementById("chonViTri").value;
  // let changeABC = document.getElementById("chonViTri").value;
  if (changeABC == "SinhVien") {
    person = new SinhVien();
  } else if (changeABC == "NhanVien") {
    person = new NhanVien();
  } else if (changeABC == "KhachHang") {
    person = new KhachHang();
  }
  for (let item of arrInput) {
    let { id, value } = item;
    person[id] = value;
  }
  listPerson.editPerson(person);
};
window.searchPerson = (event) => {
  let value = event.target.value;
  console.log(value);
  listPerson.searchPerson(value);
};
document.getElementById("sapXep").addEventListener("change", () => {
  listPerson.sapXepKiTu();
});
document.getElementById("selLoai").addEventListener("change", () => {
  listPerson.showTungLoai();
});
