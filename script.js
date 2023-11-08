// Declaración de variables
let num1 = 0;
let num2 = 0;
let result = 0;
let operator = "";

// Obtener los elementos del HTML
const display = document.getElementById("display");
const btns = document.getElementsByClassName("btn");

// Asignar eventos a los botones
for (let i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
    let value = this.getAttribute("data-value");
    if (!isNaN(value)) {
      // Es un número
      if (operator === "") {
        // No se ha seleccionado un operador
        // Agregar el número al primer operando
        num1 = num1 * 10 + parseInt(value);
        display.innerHTML = num1;
      } else {
        // Se ha seleccionado un operador
        // Agregar el número al segundo operando
        num2 = num2 * 10 + parseInt(value);
        display.innerHTML = num2;
      }
    } else if (value === "clear") {
      // Limpiar pantalla
      display.innerHTML = "0";
      num1 = 0;
      num2 = 0;
      result = 0;
      operator = "";
    } else {
      // Es un operador
      operator = value;
    }
  });
}

// Asignar evento al botón de igual
document.getElementById("equal").addEventListener("click", function() {
  // Realizar la operación seleccionada
  switch (operator) {
    case "+":
      result = num1 + num2;
      break;
    case "-":
      result = num1 - num2;
      break;
    case "*":
      result = num1 * num2;
      break;
    case "/":
      result = num1 / num2;
      break;
    default:
      result = 0;
  }

  // Mostrar resultado en pantalla
  display.innerHTML = result;
});
