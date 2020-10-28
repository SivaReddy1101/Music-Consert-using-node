var password = document.getElementById("inputPassword");
var confirmPassword = document.getElementById("confrimPassword")
var checkPassword = document.getElementById("showPassword");
var valid = {};


checkPassword.addEventListener('click', function(e){
    var target = e.target || e.srcElement;
    try{
        if (target.checked){
            password.type = "text";
            confrimPassword.type = "text";

        }
        else{
            password.type = "password";
            confrimPassword.type = "password";
        }
    }
    catch(error){
        alert("This function not working currently");
    }
});



$('#inputPassword, #confrimPassword').on('keyup', function () {
  if ($('#inputPassword').val() === $('#confrimPassword').val()) {
      $('#message').html('Matching').css('color', 'green');
  } else 
      $('#message').html('Not Matching').css('color', 'red');
});

function checkSize(){
    if (($('#inputPassword').val() === $('#confrimPassword').val())  && password.val().length >=8){
        if(password.val().length >=8){
            $('message1').html('Week password').css('color','white');
        }
        else if (password.val().length >=16)
        {
            $('message1').html('Strong password').css('color','white');
        }
    }
    else {
        $('message1').html('Password should contain at least 8 charaters.').css('color','white');
    }
}

// function setErrorHighlighter(e){
//     var target = e.target || e.srcElement;
//     if (target.value.length < 8){
//         target.className = "fail" + " form-control";
//     }else{
//         target.className = "pass" + " form-control";
//     }
// }
// function removeErrorHighlighter(e){
//     var target = e.target || e.srcElement;
//     if (target.className === "fail"){
//         target.className = "";
//     }
// }
// function passwordsMatch(e){
//     var target = e.target || e.srcElement;
//     if ((password.value === target.value) && target.value.length >=8 ){  // Checks weather the password is >=8 or not
//         target.className = "pass" + " form-control";
//     }
//     else{
//         target.className = "fail" + " form-control";
//     }
// }
// password.addEventListener("focus", removeErrorHighlighter);
// password.addEventListener("blur", setErrorHighlighter);
// confrimPassword.addEventListener("focus", removeErrorHighlighter);
// confrimPassword.addEventListener("blur", passwordsMatch); 

// Aggrement consent (you could check if user is aggread to our terms and conditons) 

if (!aggrementConsent()) {     // Call aggrementConsent(), and if not valid
    showErrorMessage(document.getElementById('aggrements')); // Show error message
    valid.aggrement = false;      // Update the valid object - this is not valid
} 
else {                             // Otherwise remove error message
    removeErrorMessage(document.getElementById('aggrements'));
}

function aggrementConsent() {
    var aggrement   = document.getElementById('aggrements');
    var valid = true;                          // Variable: valid set to true
    if (aggrement.className.indexOf('check') === -1) { // If checkbox shown
        valid = aggrement.checked;          // Update valid: is it checked/not
        if (!valid) {                            // If not, set the error message
            setErrorMessage(aggrement, 'You need to accept the aggrements to registor');
        }
    }
    return valid;                               // Return whether valid or not
}



// $('#password, #confirm_password').on('keyup', function () {
//     if ($('#password').val() == $('#confirm_password').val()) {
//         $('#message').html('Matching').css('color', 'green');
//     } else 
//         $('#message').html('Not Matching').css('color', 'red');
// });