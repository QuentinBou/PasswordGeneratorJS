const rangeValue = document.getElementById("password-length");
const showPassword = document.getElementById("password-output");
let password = "";

const dataLower = "azertyuiopqsdfghjklmwxcvbn";
const dataUpper = dataLower.toUpperCase();
const dataNumber = "0123456789";
const dataSymbols = "&é'(-è_çà)=}]@^[{#~%¤$*/?!§,";

function newPassword() {
  let data = [];

  if (lowercase.checked) data.push(...dataLower);
  if (uppercase.checked) data.push(...dataUpper);
  if (number.checked) data.push(...dataNumber);
  if (symbols.checked) data.push(...dataSymbols);

  if (data.length === 0) {
    alert("Aucun critère n'est sélectionné");
    return;
  }

  for (i = 0; i < rangeValue.value; i++) {
    password += data[Math.floor(Math.random() * data.length)];
  }

  showPassword.value = password;

  showPassword.select();
  document.execCommand("copy");
  
  generateButton.textContent = "Copié !"
  setTimeout(() => {
      generateButton.textContent = "Générer le mot de passe"
  }, 2500)
  
  password = ""
}

generateButton.addEventListener("click", newPassword);
