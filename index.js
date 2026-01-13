const form = document.getElementById("form");
const firstName = document.getElementById("firstName");
const lastName = document.getElementById("lastName");
const emailAddress = document.getElementById("email");
const queryType = document.getElementById("queryType");

form.addEventListener("submit",(event)=>{
   event.preventDefault();

   const isValidForm = checkValidation();

   if(!isValidForm) return; 
    
   displayToast();
})

function checkValidation() {

    if(!firstname) {
        console.log("firstName does not exists");
        return false;
    }
    if(!lastName) {
        console.log("lastName does not exists");
        return false;
    }
    if(!emailAddress.includes("@")) {
        console.log("Please enter a valid email Address");
        return false;
    }
    if(!emailAddress) {
        console.log("email does not exists");
        return false;
    }
    if(!queryType) {
        console.log("please select a query Type");
        return false;
    }
    if(!message) {
        console.log("message does not exists");
        return false;
    }
    if(!consent) {
        console.log("consent does not exists");
        return false;
    }

    return true;

}