const form = document.getElementById("form");
const firstName = document.getElementById("firstName");
const lastName = document.getElementById("lastName");
const emailAddress = document.getElementById("email");
const consent = document.getElementById("consent");
const message = document.getElementById("message");

form.addEventListener("submit",(event)=>{
   event.preventDefault();

   const isValidForm = checkValidation();

   if(!isValidForm) return;
    
   displayToast(3000);
})

function checkValidation() {
    const firstNameValue = firstName.value;
    const lastNameValue = lastName.value;
    const email = emailAddress.value;
    const consentCheck = consent.checked;
    const messageValue = message.value;

    if(!firstNameValue) {
        showError(firstName,"This field is required");
        return false;
    } else {
        clearError(firstName);
    }

    if(!lastNameValue) {
        showError(lastName,"This field is required");
        return false;
    } else {
        clearError(lastName);
    }

     if(!email) {
        showError(emailAddress,"This field is required");
        return false;
    } else {
        clearError(emailAddress);
    }

    if(!email.includes("@")) {
         showError(emailAddress,"Please Enter a valid email Address");
        return false;
    } else {
        clearError(emailAddress)
    }
   
    if(!queryType) {  
        showError(queryType,"Please select a query type");
        return false;
    } else {
        clearError(queryType)
    }

    if(!messageValue) {
         showError(message,"This field is required");
        return false;
    } else {
        clearError(message);
    }

    if(!consentCheck) {
        showError(consent,"To submit this form, please consent to being contacted");
        return false;
    } else {
        clearError(consent);
    }

    return true;

}

function displayToast(duration) {
    const toast = document.getElementById("toast");
    toast.classList.add("show");
    setTimeout(()=>{
        toast.classList.remove("show");
    },duration);
}

function showError(input,message) {
  input.classList.add("error");

     
  if (input.nextElementSibling?.classList.contains("error-message")) {
    input.nextElementSibling.textContent = message;
    return;
  }

 
  const errorSpan = document.createElement("span");
  errorSpan.className = "error-message";
  errorSpan.textContent = message;

  
  input.insertAdjacentElement("afterend", errorSpan);
}

function clearError(input) {
  input.classList.remove("error");

  if (input.nextElementSibling?.classList.contains("error-message")) {
    input.nextElementSibling.remove();
  }
}