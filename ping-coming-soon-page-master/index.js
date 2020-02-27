var x = document.getElementById("form");
var y = document.getElementById("email-input");
var z = document.getElementById("error-message");



x.addEventListener("submit",function(event){
    if(y.value=="") {
        z.textContent = 'Whoops! It looks like you forgot to add your email';
        y.classList.add("errore");
    } else if (validate(y.value) === false) {
        z.textContent = 'Please provide a valid email address';
    } else {
        z.textContent = "";
    }
});



function validate(email) {
    var v = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    
    return v.test(email);
}
