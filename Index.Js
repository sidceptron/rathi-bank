function formcheck() {
    var name = document.forms["register"]["name"].value; 
    if (name == null || name == "" ) {
       alert("Please enter your name.");
       return false;
    }
    var email = document.forms["register"]["email"].value;
    if (email == null || email == "" ) {
       alert("Please enter your E-Mail.");
       return false;
    }
    else {
      alert (" Welcome to ARIT, You are registered.")
    }
 }