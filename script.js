const taxCalculatorForm = document.getElementById("taxCalculatorForm");
const taxResult = document.getElementById("taxResult");
const taxAmount = document.getElementById("taxAmount");
const closeModal = document.querySelector(".close-btn");
const errorIcons = document.querySelectorAll(".error");
const calculateTaxBtn = document.getElementById("calculateTaxBtn");

taxCalculatorForm.addEventListener("submit", calculateTax);
closeModal.addEventListener("click", closeModalWindow);

function calculateTax(e) {
  e.preventDefault();

  const grossAnnualIncome = document.getElementById("grossAnnualIncome").value;
  const extraIncome = document.getElementById("extraIncome").value;
  const deductions = document.getElementById("deductions").value;
  const age = document.getElementById("age").value;

  if (!validateInputs(grossAnnualIncome, extraIncome, deductions, age)) {
    return;
  }

  console.log("grossincome", grossAnnualIncome);
  const overallIncome = +grossAnnualIncome + +extraIncome - +deductions;
  let taxRate;

  if (overallIncome <= 800000) {
    taxAmount.textContent = "0";
  } else {
    const incomeOverEightLakhs = overallIncome - 800000;

    if (age === "<40") {
      taxRate = 0.3;
    } else if (age === ">=40&<60") {
      taxRate = 0.4;
    } else {
      taxRate = 0.1;
    }

    console.log("incomeOverEightLakhs", incomeOverEightLakhs, "rate", taxRate);
    const calculatedTax = incomeOverEightLakhs * taxRate;
    taxAmount.textContent = calculatedTax.toFixed(2);
  }

  taxResult.style.display = "block";
}

function validateInputs(grossAnnualIncome, extraIncome, deductions, age) {
  let isValid = true;
    console.log(grossAnnualIncome,'test')
  if (
    grossAnnualIncome == "" ||
    isNaN(grossAnnualIncome) ||
    grossAnnualIncome < 0
  ) {
    showErrorIcon(0);
    isValid = false;
  } else {
    hideErrorIcon(0);
  }

  if (isNaN(extraIncome) || extraIncome < 0 || extraIncome == "") {
    showErrorIcon(1);
    isValid = false;
  } else {
    hideErrorIcon(1);
  }

  if (isNaN(deductions) || deductions < 0 || deductions == "") {
    showErrorIcon(3);
    isValid = false;
  } else {
    hideErrorIcon(3);
  }

  if (age == null || age === "") {
    showErrorIcon(2);
    isValid = false;
  } else {
    hideErrorIcon(2);
  }

  return isValid;
}

function showErrorIcon(index) {
  errorIcons[index].style.visibility = "visible";
}

function hideErrorIcon(index) {
  errorIcons[index].style.visibility = "hidden";
}

function closeModalWindow() {
  taxResult.style.display = "none";
}
