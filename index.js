const form = document.getElementById("form");

const fields = {
  firstName: document.querySelector("#firstName"),
  lastName: document.querySelector("#lastName"),
  email: document.querySelector("#email"),
  message: document.querySelector("#message"),
  consent: document.querySelector("#consent"),
  queryType: document.querySelectorAll('input[name="queryType"]:checked')
};

const siblingElement = document.getElementsByClassName("radio-card-container");

form.addEventListener("submit",(event)=>{
   event.preventDefault();

   const isValidForm = checkValidation();

   if(!isValidForm) return;
    
   displayToast(3000);
})

function checkValidation() {
  let isValid = true;

  if (!fields.firstName.value.trim()) {
    showError(fields.firstName, "This field is required");
    isValid = false;
  } else {
    clearError(fields.firstName);
  }

  if (!fields.lastName.value.trim()) {
    showError(fields.lastName, "This field is required");
    isValid = false;
  } else {
    clearError(fields.lastName);
  }

  if (!fields.email.value.trim()) {
    showError(fields.email, "This field is required");
    isValid = false;
  } else if (!fields.email.value.includes("@")) {
    showError(fields.email, "Please enter a valid email address");
    isValid = false;
  } else {
    clearError(fields.email);
  }

  if(!fields.queryType) {
    showError(siblingElement, "please select a query type");
    isValid = false;
  } else {
    clearError(siblingElement)
  } 

  if (!fields.message.value.trim()) {
    showError(fields.message, "This field is required");
    isValid = false;
  } else {
    clearError(fields.message);
  }

  if (!fields.consent.checked) {
    showError(fields.consent, "To submit this form, please consent to being contacted");
    isValid = false;
  } else {
    clearError(fields.consent);
  }

  return isValid;
}


function displayToast(duration) {
    const toast = document.getElementById("toast");
    toast.classList.add("show");
    setTimeout(()=>{
        toast.classList.remove("show");
    },duration);
}

function getGroup(input) {
  return input.closest(".form-container");
}


function showError(input, message) {
  input.classList.add("error");

  const errorSpan = input.nextElementSibling;
  if (!errorSpan || !errorSpan.classList.contains("error-message")) return;

  errorSpan.textContent = message;
  errorSpan.style.display = "block";
}

function clearError(input) {
  input.classList.remove("error");

  const errorSpan = input.nextElementSibling;
  if (!errorSpan || !errorSpan.classList.contains("error-message")) return;

  errorSpan.style.display = "none";
}



