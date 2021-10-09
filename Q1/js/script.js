var toFocus;

function validateName(){
    var name = document.getElementById("nameInput");
    var msg = document.getElementById("nameHelp");
    msg.innerText = "";
    if (name.value===""){
        msg.innerText = "Name cannot be left blank.";
        toFocus = name;
    }
    else{
        if (/\d/.test(name.value)){
            msg.innerText = "Name cannot contain numbers.";
            toFocus = name;
        }
        else if (/[^a-zA-Z\s]/.test(name.value)){
            msg.innerText = "Name cannot contain special characters.";
            toFocus = name;
        }
    }
}

function validateDob(){
    var dob = document.getElementById("dobInput");
    var msg = document.getElementById("dobHelp");
    msg.innerText = "";
    if(dob.value===""){
        msg.innerText = "Date of birth cannot be left blank.";
        toFocus = dob;
    }
    else{
        var arr = dob.value.split("-");
        var date = new Date(arr[0], arr[1]-1, arr[2]);
        var today = new Date();
        if (date>today){
            msg.innerText = "Please enter a valid date of birth.";
            toFocus = dob;
        }
    }
}

function validateEmail(){
    var email = document.getElementById("emailInput");
    var msg = document.getElementById("emailHelp");
    msg.innerText = "";
    if (email.value===""){
        msg.innerText = "Email cannot be left blank.";
        toFocus = email;
    }
    else{
        if(!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email.value)){
            msg.innerText = "Please enter a valid email id.";
            toFocus = email;
        }
    }
}

function validatePhn(){
    var phn = document.getElementById("phnInput");
    var msg = document.getElementById("phnHelp");
    msg.innerText = "";
    var contact = phn.value.replace(/ |-/g, "");
    if (contact===""){
        msg.innerText = "Contact number cannot be left blank";
        toFocus = phn;
    }
    else{
        if (/[a-zA-z]/.test(contact)){
            msg.innerText = "Contact number cannot contain alphabets";
            toFocus = phn;
        }
        else if(/[^0-9]/.test(contact)){
            msg.innerText = "Contact number cannot contain special characters";
            toFocus = phn;
        }
        else{
            if (contact.length<8){
                msg.innerText = "Contact number should have minimum 8 digits";
                toFocus = phn;
            }
            else if (contact.length>15){
                msg.innerText = "Contact number can have maximum 15 digits"
                toFocus = phn;
            }
        }
    }
}

function validateGenre(){
    var genre = document.getElementById("genreInput");
    var msg = document.getElementById("genreHelp");
    msg.innerText = "";
    if (genre.value===""){
        msg.innerText = "Please enter a genre of music that you like";
        toFocus = genre;
    }
}

function validate(level){

    if (level >4){
        validateGenre();
        if (!toFocus){
            var btn = document.getElementById("submit-btn");
            btn.type = "submit";
            btn.click();
        }
    }
    if (level >3)
        validatePhn();
    if (level >2)
        validateEmail();
    if (level>1)
        validateDob();
    if (level>0)
        validateName();
    
    if (toFocus){
        toFocus.focus();
        toFocus = null;
    }

}   
