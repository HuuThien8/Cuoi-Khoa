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
      console.log("Please check your information");
    }
  }
  console.log("Login failed");
};
