const numberInput = document.querySelector("#number");
const numberInWordsField = document.querySelector("#words");
const errorTextField = document.querySelector("#error");

numberInput.addEventListener("change", (event) => {
  let inputNumber = Number(event.target.value);

  try {
    const output = numberToWords(inputNumber);
    numberInWordsField.textContent = output;
    errorTextField.innerText = "";
  } catch (error) {
    numberInWordsField.textContent = "";
    errorTextField.innerText = error.message;
  }
});

const onesAndTeens = [
  "",
  "one",
  "two",
  "three",
  "four",
  "five",
  "six",
  "seven",
  "eight",
  "nine",
  "ten",
  "eleven",
  "twelve",
  "thirteen",
  "forteen",
  "fifteen",
  "sixteen",
  "seventeen",
  "eighteen",
  "nineteen",
];

const tens = [
  "",
  "ten",
  "twenty",
  "thirty",
  "forty",
  "fifty",
  "sixty",
  "seventy",
  "eighty",
  "ninety",
];

const mills = [
  "",
  "thousand",
  "million",
  "billion",
  "trillion",
  "quadrillion",
  "quintillion",
  "sextillion",
  "septillion",
  "octillion",
  "nonillion",
];

function numberToWords(inputNumber) {
  if (isNaN(inputNumber)) throw new Error("Not A Number");
  if (!Number.isInteger(inputNumber)) throw new Error("Not An Integer");

  let numberInWords = "";
  if (inputNumber < 20) {
    numberInWords = onesAndTeens[inputNumber];
  } else if (inputNumber >= 20 && inputNumber < 100) {
    let digitStr = inputNumber.toString();

    let one = digitStr[1];
    let ten = digitStr[0];

    if (onesAndTeens[one]) {
      return tens[ten] + "-" + onesAndTeens[one];
    } else {
      return tens[ten];
    }
  }

  return numberInWords;
}
