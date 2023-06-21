function emptyTest(checkInput, idInfo) {
  // check xem input đó có được nhập dữ liệu vào hay không nếu không có thì báo lỗi và trả về một kết quả false , nếu có trả về true
  if (checkInput) {
    document.getElementById(idInfo).innerHTML = "";
    return true;
  } else {
    document.getElementById(idInfo).innerHTML = "***please this input inside";
    return false;
  }
}

function checkEmail(checkInput, idInfo) {
  var regexEmail =
    /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
  if (regexEmail.test(checkInput)) {
    document.getElementById(idInfo).innerHTML = "";
    return true;
  } else {
    document.getElementById(idInfo).innerHTML = "***please input form email";
    return false;
  }
}
function checkAccount(checkInput, idInfo) {
  if (checkInput.length >= 4 && checkInput.length <= 6) {
    document.getElementById(idInfo).innerHTML = "";
    return true;
  } else {
    document.getElementById(idInfo).innerHTML =
      "please you must input 4-6 characters";
    return false;
  }
}
function checkDiem(checkInput, idInfo) {
  if (checkInput >= 0 && checkInput <= 10) {
    document.getElementById(idInfo).innerHTML = "";
    return true;
  } else {
    document.getElementById(idInfo).innerHTML =
      "please you must input 0-10 point";
    return false;
  }
}
function checkName(checkInput, idInfo) {
  var regexNumber = /^[a-z0-9]+$/i;
  if (!regexNumber.test(checkInput)) {
    document.getElementById(idInfo).innerHTML = "";
    return true;
  } else {
    document.getElementById(idInfo).innerHTML = "Please you only input letter";
  }
}
