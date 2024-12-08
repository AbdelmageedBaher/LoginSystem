var signupNameInput = document.querySelector("#signupName");
var signupEmailInput = document.querySelector("#signupEmail");
var signupPasswordInput = document.querySelector("#signupPassword");

// button sign up
function singUpfun() {
  if (validName() && validEmail() && validPassword()) {
    var users = JSON.parse(localStorage.getItem("users")) || [];

    var newEmail = signupEmailInput.value;
    var emailExists = users.some(function (users) {
      return users.email === newEmail;
    });

    var msgSuccess = document.getElementById("msgSuccess");
    var msgFind = document.querySelector("#msgFind");

    if (emailExists) {
      msgFind.classList.remove("d-none");
      msgSuccess.classList.add("d-none");
    } else {
      var box = {
        name: signupNameInput.value,
        email: newEmail,
        password: signupPasswordInput.value,
      };

      users.push(box);
      localStorage.setItem("users", JSON.stringify(users));

      
      msgSuccess.classList.remove("d-none");
      msgFind.classList.add("d-none");
      clearData();
    }
  }
}

// clear data from input and valid
function clearData() {
  signupNameInput.value = "";
  signupEmailInput.value = "";
  signupPasswordInput.value = "";

  signupNameInput.classList.remove("is-valid");
  signupEmailInput.classList.remove("is-valid");
  signupPasswordInput.classList.remove("is-valid");
}

// validation for name
function validName() {
  var regex = /^[A-Za-z\s\-]{2,}$/;
  var text = signupNameInput.value;

  if (regex.test(text)) {
    signupNameInput.classList.add("is-valid");
    signupNameInput.classList.remove("is-invalid");
    return true;
  } else {
    signupNameInput.classList.remove("is-valid");
    signupNameInput.classList.add("is-invalid");
    return false;
  }
}

// validation for email
function validEmail() {
  var regex = /^[a-z0-9\-\.]+@([a-z0-9\-]+\.)+[\w-]{2,4}$/g;
  var text = signupEmailInput.value;

  if (regex.test(text)) {
    signupEmailInput.classList.add("is-valid");
    signupEmailInput.classList.remove("is-invalid");
    return true;
  } else {
    signupEmailInput.classList.remove("is-valid");
    signupEmailInput.classList.add("is-invalid");
    return false;
  }
}

// validation for password
function validPassword() {
  var regex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gm;
  var text = signupPasswordInput.value;

  if (regex.test(text)) {
    signupPasswordInput.classList.add("is-valid");
    signupPasswordInput.classList.remove("is-invalid");
    return true;
  } else {
    signupPasswordInput.classList.remove("is-valid");
    signupPasswordInput.classList.add("is-invalid");
    return false;
  }
}
