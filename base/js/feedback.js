$(document).ready(function(){
    let name = localStorage.getItem("firstName");
    document.getElementById("feedback").innerHTML = "Thank you " + name + "! " + " I will contact you in 24 hours!";
});