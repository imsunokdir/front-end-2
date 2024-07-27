let successMessage = document.getElementById("success");
let passwordLength;
let emailAddress;
let isEmailValid = false;
let isPasswordValid = false;

function handleEmail(event) {
  emailAddress = event.target.value;
  let emailLength = emailAddress.length;
  let emailWarningMessage = document.getElementById("email-message");
  if (emailLength <= 3 || !validateEmail(emailAddress)) {
    emailWarningMessage.innerText =
      "Make sure email is more than 3 characters and has @ and a.";
    isEmailValid = false;
  } else {
    emailWarningMessage.innerText = "";
    isEmailValid = true;
  }
  checkFormValidity();
}

function handlePassword(event) {
  let passwordWarningMessage = document.getElementById("password-message");
  passwordLength = event.target.value.length;
  if (validatePassword(passwordLength)) {
    passwordWarningMessage.innerText = "";
    isPasswordValid = true;
  } else {
    passwordWarningMessage.innerText =
      "Make sure password is more than 8 characters.";
    isPasswordValid = false;
  }
  checkFormValidity();
}

function validatePassword(passwordLength) {
  if (passwordLength > 8) {
    return true;
  }
  return false;
}

function validateEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

function checkFormValidity() {
  if (isEmailValid && isPasswordValid) {
    successMessage.innerText = "All good to go!";
  } else {
    successMessage.innerText = "";
  }
}

function showConfirmation(event) {
  event.preventDefault();
  let isConfirmed = confirm("Do you want to submit?");
  if (isConfirmed) {
    alert("successful signup!");
  } else {
    document.querySelectorAll("input").forEach((inp) => {
      inp.value = "";
    });
    window.location.reload();
  }
}
