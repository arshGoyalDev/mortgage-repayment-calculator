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

  // if (!errorAmount && !errorYear && !errorInterest && !errorType) {
  //   calculateMortgage();
  // }
});

// func() to Calculate mortgage

// const calculateMortgage = function() {
//   console.log("calculated");
// }

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

