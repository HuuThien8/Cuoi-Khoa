let login = document.getElementById("register");

login.onsubmit = function (event) {
  event.preventDefault();

  let email = document.getElementById("username");
  let pw = document.getElementById("password");

  let users = JSON.parse(localStorage.users);
  console.log(users);

  for (let i = 0; i < users.length; i++) {
    let infor = users[i];
    console.log(infor);
    if (
      email.value.trim() == users[i].email &&
      pw.value.trim() == users[i].pw
    ) {
      console.log("Succesfully login");
      location.replace("../main/index.html");

      return;
    } else {
      alert("Please check your information");
    }
  }
};

// let login = document.getElementById("login");

// login.onsubmit = function (event) {
//   let email = document.getElementById("username");
//   let pw = document.getElementById("password");
//   event.preventDefault();
//   let users = JSON.parse(localStorage.users);
//   console.log(users);
//   for (let i = 0; i < users.length; i++) {
//     infor = users[i];
//     console.log(infor);
//     if (
//       email.value.trim() == users[i].email &&
//       pw.value.trim() == users[i].pw
//     ) {
//       console.log("infor");

//       window.location.replace("index.html");
//       return;
//     }
//   }
//   console.log("Login failed");
// };
