const email = document.getElementById('email').value;
const password = document.getElementById('password').value;
const form = document.getElementById('form').value;
const errorEmail = document.getElementById('errorEmail');
const errorPassword = document.getElementById('errorPassword');

let validMail = "/^[^ ]+@[^ ]+\.[A-Z]{2,3}$/";


function formValidation(){
  if(email === "" || email === null || email !== validMail) {
    errorEmail.innerHTML = "* Please input a valid email.";
  }if(password < 6){
    errorPassword.innerHTML = "* Incorrect password, password must be at least 6 characters.";
  }
}

