const inpValue = document.querySelector("input");

const capAlphabets = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowAlphabets = "abcdefghijklmnopqrstuvwxyz";
const symbols = "!\"#%&'()*+,-./:;<=>?@[\\]_{}";
const numbers = "0123456789";

const allChar = capAlphabets + lowAlphabets + symbols + numbers;

function generatePassword() {
  let password = "";

  password += capAlphabets[Math.floor(Math.random() * capAlphabets.length)];
  password += lowAlphabets[Math.floor(Math.random() * lowAlphabets.length)];
  password += symbols[Math.floor(Math.random() * symbols.length)];
  password += numbers[Math.floor(Math.random() * numbers.length)];

  while (password.length < 20) {
    password += allChar[Math.floor(Math.random() * allChar.length)];
  }
  inpValue.value = password;
}

function copyPassword() {
  if (inpValue.value.trim() == "") return;
  navigator.clipboard
    .writeText(inpValue.value)
    .then(() => {
      inpValue.value = "Copied";
    })
    .catch(() => {
      alert("text cant be copied");
    });
}
