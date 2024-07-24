// Calculate Mortgage

const amountInput = document.querySelector("#mortgage-amount");
const termInput = document.querySelector("#mortgage-term");
const interestInput = document.querySelector("#interest-rate");
const repaymentRadio = document.querySelector("#repayment");
const interestRadio = document.querySelector("#interest");

const calculateBtn = document.querySelector(".calculate-btn");

calculateBtn.addEventListener("click", (e) => {
  e.preventDefault();

  checkForError();

  if (!errorAmount && !errorYear && !errorInterest && !errorType) {
    calculateMortgage();
  }
});

// func() to Calculate mortgage

const emptyContainer = document.querySelector(".empty-container");
const resultContainer = document.querySelector(".result-container");

const monthlyDisplay = document.querySelector(".monthly-display");
const totalDisplay = document.querySelector(".total-display");

const calculateMortgage = function () {
  const mortgageAmount = amountInput.value;
  const mortgageTerm = termInput.value;
  const interestRate = interestInput.value;

  const monthlyInterest = interestRate / (100 * 12);
  const months = mortgageTerm * 12;

  const monthlyPayment =
    (mortgageAmount * monthlyInterest) /
    (1 - Math.pow(1 + monthlyInterest, -months));

  const totalPayment = monthlyPayment * months;

  emptyContainer.classList.add("hidden");
  resultContainer.classList.remove("hidden");

  if (repaymentRadio.checked) {
    monthlyDisplay.textContent = monthlyPayment.toFixed(2);
    totalDisplay.textContent = totalPayment.toFixed(2);
  } else {
    monthlyDisplay.textContent = (
      monthlyPayment -
      mortgageAmount / months
    ).toFixed(2);
    totalDisplay.textContent = (totalPayment - mortgageAmount).toFixed(2);
  }
};

// Clear Btn

const clearAllBtn = document.querySelector(".clear-all");

clearAllBtn.addEventListener("click", () => {
  emptyContainer.classList.remove("hidden");
  resultContainer.classList.add("hidden");

  amountInput.value = "";
  termInput.value = "";
  interestInput.value = "";

  repaymentRadio.checked = false;
  interestRadio.checked = false;
});

// Errors

let errorAmount = false;
let errorYear = false;
let errorInterest = false;
let errorType = false;

const checkForError = function () {
  // mortgage amount
  Number(amountInput.value) === 0
    ? (toggleError(true, amountInput), (errorAmount = true))
    : (toggleError(false, amountInput), (errorAmount = false));

  // mortgage term
  Number(termInput.value) === 0
    ? (toggleError(true, termInput), (errorYear = true))
    : (toggleError(false, termInput), (errorYear = false));

  // mortgage interest
  Number(interestInput.value) === 0
    ? (toggleError(true, interestInput), (errorInterest = true))
    : (toggleError(false, interestInput), (errorInterest = false));

  // mortgage type
  !repaymentRadio.checked && !interestRadio.checked
    ? (toggleError(true, repaymentRadio.parentElement), (errorType = true))
    : (toggleError(false, repaymentRadio.parentElement), (errorType = false));
};

// Toggle Error

const toggleError = function (showError, input) {
  if (showError) {
    input.parentElement.classList.add("error");
    input.parentElement.nextElementSibling.classList.remove("hidden"); // console.log("error")
  } else {
    input.parentElement.classList.remove("error");
    input.parentElement.nextElementSibling.classList.add("hidden"); // console.log("error")
  }
};
