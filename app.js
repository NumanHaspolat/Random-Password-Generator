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
let total = "";

generateBtn.addEventListener("click", () => {
  if (lenghtInp.value > 50 || lenghtInp.value < 0) {
    lenghtInp.value = "";
    alert("Lenght should be between 0 to 50");
    return;
  }
  
  for (let i = 1; i <= lenghtInp.value; i++) {
    const randomNumber = Math.floor(Math.random() * 88);
    let resultPass = values[randomNumber];
    // console.log(resultPass);
    total += resultPass;
    resultInp.value = total;
  }
  const lenghtInpValue = Number(lenghtInp.value);
  lenghtInp.value = "";
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
