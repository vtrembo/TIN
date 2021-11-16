const emailLabel = document.getElementById("emailLabel");
const ageLabel = document.getElementById("ageLabel");
const validateButton = document.getElementById("validateButton");
const emailRegex = new RegExp(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/i);
const bool = isCorrect;

function validateForm () {
    let emailInput = document.getElementById("emailInput");
    let ageInput = document.getElementById("ageInput");
    if (!emailRegex.test(emailInput.value))  {
        emailLabel.style.color = "red";
        isCorrect = false;
    }
       else 
        emailLabel.style.color = "black";
      if (ageInput.value == "" || isNaN(ageInput.value)) {
        ageLabel.style.color = "red";  
        isCorrect = false;
      }
       else 
        ageLabel.style.color = "black";  
        if (!isCorrect) {
            alert("Provide correct data!");
            isCorrect = true;
        }  
};