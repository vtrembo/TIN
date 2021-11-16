  
  setTimeout(() => {
    const paragraph = document.createElement("p");
    const paragraphText = document.createTextNode("5sec paragraph is here!");
    paragraph.appendChild(paragraphText);
    document.getElementById("wrapper").appendChild(paragraph);
  }, 5000);