let CF;

function CtoF () {
  let CF = (document.getElementById("C_input").value * 9) / 5 + 32;
  document.getElementById("F_input").value = Math.round(CF);
};

function FtoC () {
  let CF = ((document.getElementById("F_input").value - 32) * 5) / 9;
  document.getElementById("C_input").value = Math.round(CF);
};