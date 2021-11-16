const emailLabel = document.getElementById("emailLabel");
const ageLabel = document.getElementById("ageLabel");
const addToTable = document.getElementById("addToTable");

const table = document.getElementById("table");

const emailRegex = new RegExp(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/i);
const bool = isCorrect = true;

addToTable.addEventListener("click", () => {
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
        if (isCorrect) {
            const row = table.insertRow(table.rows.length);
            const emailCell = row.insertCell(0);
            const ageCell = row.insertCell(1);
            let email = document.createTextNode(emailInput.value);
            let age = document.createTextNode(ageInput.value);
            emailCell.appendChild(email);
            ageCell.appendChild(age);
          } else {
            alert("Provide correct data!");
            isCorrect = true;
          }
});