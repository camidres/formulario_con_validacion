const name = document.getElementById("name");
const surname = document.getElementById("surname");
const mail = document.getElementById("mail");
const pass = document.getElementById("pass");
const form = document.getElementById("form");
const errName = document.getElementById("errName");
const errSurname = document.getElementById("errSurname");
const errMail = document.getElementById("errMail");
const errPass = document.getElementById("errPass");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let warningsName = "";
  let warningsSurname = "";
  let warningsMail = "";
  let warningsPass = "";

  errName.innerHTML = "";
  errSurname.innerHTML = "";
  errMail.innerHTML = "";
  errPass.innerHTML = "";

  let entrar = false;
  let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/;

  if (name.value.length < 3) {
    warningsName += `* El nombre no es valido`;
    entrar = true;
  }

  if (surname.value.length < 6) {
    warningsSurname += `* El apellido no es valido`;
    entrar = true;
  }

  if (!regexEmail.test(mail.value)) {
    warningsMail += `* El email no es valido`;
    entrar = true;
  }

  if (pass.value.length < 8) {
    warningsPass += `* La contraseña no es valida`;
    entrar = true;
  }

  if (entrar) {
    errName.innerHTML = warningsName;
    errSurname.innerHTML = warningsSurname;
    errMail.innerHTML = warningsMail;
    errPass.innerHTML = warningsPass;
  }
});
