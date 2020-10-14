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
  if(inputNumber < 1000) {
    numberInWords = threeDigitAnalysis(inputNumber)
  }

  return numberInWords;
}

function threeDigitAnalysis(threeDigit) {
  let number = parseInt(threeDigit);

  if (number === 0) return "zero";
  if (number < 20) return teensToWord(number);
  if (number < 100) return twoDigitToWord(number);
  if (number < 1000) return threeDigitToWord(number);
}

function teensToWord(twoDigit) {
  if (twoDigit < 20) return onesAndTeens[twoDigit];
}

function twoDigitToWord(twoDigit) {
  let digitStr = twoDigit.toString();

  if (twoDigit < 20) return teensToWord(twoDigit);

  let one = parseInt(digitStr[1]);
  let ten = parseInt(digitStr[0]);

  return onesAndTeens[one] ? tens[ten] + "-" + onesAndTeens[one] : tens[ten];
}

function threeDigitToWord(threeDigit) {
  let digitStr = threeDigit.toString();

  let hund = digitStr[0];
  let ten = parseInt(digitStr[1] + digitStr[2]);

  let tensToWord = twoDigitToWord(ten);
  let hundToWord = onesAndTeens[hund];

  if (!hundToWord) return tensToWord;
  if (!tensToWord) return hundToWord + " hundred";
  return hundToWord + " hundred " + tensToWord;
}
