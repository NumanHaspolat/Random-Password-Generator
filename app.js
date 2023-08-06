const lenghtInp = document.getElementById("lenght");
const generateBtn = document.querySelector(".generate-btn");
const resultInp = document.querySelector(".result");
const values = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
  0,
  1,
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  9,
  ",",
  ".",
  "/",
  "!",
  "?",
  "`",
  "-",
  "+",
  "*",
  "<",
  ">",
  "^",
  "&",
  "%",
  "$",
  "#",
  "@",
  ";",
  ":",
  "|",
  "(",
  ")",
  "[",
  "]",
  "{",
  "}",
];

let text = "";

generateBtn.addEventListener("click", () => {
  if (lenghtInp.value > 30 || lenghtInp.value < 0) {
    lenghtInp.value = "";
    alert("Lenght should be between 0 to 30");
    return;
  }

  let newPass = generatePassword(lenghtInp.value);
  resultInp.value = newPass;
  text = resultInp.value;
  lenghtInp.value = "";
  console.log(newPass);
});

function myFunction() {
  var copyText = document.getElementById("myInput");
  copyText.select();
  copyText.setSelectionRange(0, 99999);
  navigator.clipboard.writeText(copyText.value);

  var tooltip = document.getElementById("myTooltip");
  tooltip.innerHTML = "Copied";
}

function outFunc() {
  var tooltip = document.getElementById("myTooltip");
  tooltip.innerHTML = "Copy to clipboard";
}

const generatePassword = () => {
  let total = "";
  for (let i = 1; i <= lenghtInp.value; i++) {
    const randomNumber = Math.floor(Math.random() * values.length);
    let resultPass = values[randomNumber];
    total += resultPass;
  }
  return total;
};
