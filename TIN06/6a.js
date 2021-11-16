C_input = document.getElementById("C_input");
F_input = document.getElementById("F_input");

function CtoF () {
    C_val = C_input.value;
    F_val = C_val * (9 / 5) + 32;
    F_input.value = F_val;
};

function FtoC () {
    F_val = F_input.value;
  C_val = ((F_val - 32) * 5) / 9;
  C_input.value = C_val;
};