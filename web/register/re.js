// let register = document.getElementById("register");
// // khi ấn enter
// register.onsubmit = function (event) {
//   // lệnh ko bị mất
//   event.preventDefault();
//   let email = document.getElementById("username");
//   let pw = document.getElementById("password");
//   // xóa khoảng trống
//   if (email.value.trim().lenght == 0 || pw.value.trim().lenght == 0 || ) {
//     alert("Please check your infor");
//   } else if (email.value.trim().lenght < 8) {
//     alert("Please check your email");
//   } else if (email.value.trim().lenght > 8) {
//     alert("Please check your email");
//   } else if (pw.value.trim().lenght > 8) {
//     alert("Please check your password");
//   } else if (pw.value.trim().lenght < 8) {
//     alert("Please check your password");
//   } else {
//     localStorage.setItem(
//       "users",
//       JSON.stringify([
//         {
//           email: email.value.trim(),
//           pw: pw.value.trim(),
//         },
//       ])
//     );
//   }
// };
let register = document.getElementById("register");

// khi ấn enter
register.onsubmit = function (event) {
  // lệnh không bị mất
  event.preventDefault();

  let email = document.getElementById("username");
  let pw = document.getElementById("password");

  // xóa khoảng trống
  if (email.value.trim().length === 0 || pw.value.trim().length === 0) {
    alert("Please check your username and password");
  } else if (email.value.trim().length !== 8) {
    alert("Please check your username");
  } else if (
    //!pw.value.trim().match()lowerCase//
    pw.value.trim().length !== 8 ||
    !/[A-Z]/.test(pw.value) || //Kiểm tra chữ hoa, chữ thường, số//
    !/[a-z]/.test(pw.value) ||
    !/[0-9]/.test(pw.value)
  ) {
    alert("Please check your password");
  } else {
    // Lưu thông tin người dùng vào localStorage
    let user = {
      email: email.value.trim(),
      pw: pw.value.trim(),
    };

    let existingUsers = JSON.parse(localStorage.getItem("users")) || [];
    existingUsers.push(user);

    localStorage.setItem("users", JSON.stringify(existingUsers));

    alert("User registered successfully!");
    location.replace("../login/log.html");
  }
};

// Lấy thông tin người dùng từ localStorage
let profile = localStorage.getItem("users");
