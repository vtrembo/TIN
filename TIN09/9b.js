
const result = document.getElementById("result");

let xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function () {
  if (this.readyState == 4 && this.status == 200) {
    result.innerHTML = `Result: ${JSON.parse(xhttp.responseText).result}`;
  }
};

resultButton.addEventListener("click", () => { xhttp.open("POST", "http://localhost:7777/calc", true);
  xhttp.setRequestHeader("Content-Type", "application/json;charset=UTF-8");

  xhttp.send(
    JSON.stringify({
      a: num1.value,
      b: num2.value,
      op: operation.value,
    })
  );
});