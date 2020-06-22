var form = document.getElementById("formContent");
var firstNameError = document.querySelector("#firstName + span.error");
var lastNameError = document.querySelector("#lastName + span.error");
var emailError = document.querySelector("#mail + span.error");
var phoneError = document.querySelector("#phone + span.error");

var firstName = document.getElementById("firstName");
var lastName = document.getElementById("lastName");
var email= document.getElementById("mail");
var phone= document.getElementById("phone");
var letters= /^[A-Za-z]+$/;


firstName.addEventListener("input", function (event) {
    checkFirstName();
});

function checkFirstName() {
    if(firstName.validity.tooShort){
        firstNameError.textContent = "Must be at least 2 letters.";
        return false;
    }

    if(!firstName.value.match(letters)){
        firstNameError.textContent = "Must only contain letters";
        return false
    }

    firstNameError.textContent = "";
    return true;
}

lastName.addEventListener("input", function (event) {
    checkLastName();
});

function checkLastName(){
    if(lastName.validity.tooShort){
        lastNameError.textContent = "Must be at least 2 letters.";
        return false;
    }

    if(!lastName.value.match(letters)){
        lastNameError.textContent = "Must only contain letters";
        return false;
    }

    lastNameError.textContent = "";
    return true;
}


email.addEventListener("input", function (event) {
    checkEmail()
});
function checkEmail(){
    let emailPattern = /\S+@\S+\.\S+/;
    if(!email.value.match(emailPattern)){
        emailError.textContent = "Input must contains @ & . ";
        return false;
    }
    emailError.textContent = "";
    return true;
}

phone.addEventListener("input", function (event) {
    checkPhone();
})

function checkPhone(){
    let phonePattern = /^[0-9]*$/;
    if(!phone.value.match(phonePattern)){
        phoneError.textContent = "Must only contain numbers";
        return false;
    }
    if(phone.validity.tooShort){
        phoneError.textContent = "Must contains 10 digits";
        return false;
    }
    phoneError.textContent="";
    return true;
}

function checkSubmit(){

    //save first name
    localStorage.setItem("firstName", firstName.value);
    return checkFirstName()&& checkLastName() && checkPhone() && checkEmail();
}

