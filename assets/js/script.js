// Avance lección 1
/*
- prompt para pedir al usuario un dato
- alert: para mostrar un mensaje al usuario

*/

console.log(
  "%c******* 🧚 Bienvenido a la mejor aplicación en consola del mundo mundial 🧚 *******",
  "color:white; font-size: 13px; background-color: purple; padding: 5px;",
);

const texto = document.getElementById("mostrar");
let nombre = prompt("Por favor, ingresa tu nombre:");
let num1 = parseInt(prompt(`Hola ${nombre}, por favor ingresa un número: `));
let num2 = parseInt(prompt("Ahora ingresa otro número: "));
let operacion = prompt(
  "Qué deseas hacer con estos dos números? (Sumar, restar, dividir, multiplicar",
).toLowerCase();
let resultado;

calcular();

function calcular() {
  switch (operacion) {
    case "sumar":
      resultado = num1 + num2;
      console.log(`El resultado de ${num1} + ${num2} es ${resultado}`);
      texto.textContent = `El resultado de ${num1} + ${num2} es ${resultado}`;
      break;
    case "restar":
      resultado = num1 - num2;
      console.log(`El resultado de ${num1} - ${num2} es ${resultado}`);
      texto.textContent = `El resultado de ${num1} - ${num2} es ${resultado}`;
      break;
    case "dividir":
      if (num2 !== 0) {
        resultado = num1 / num2;
        console.log(`El resultado de ${num1} / ${num2} es ${resultado}`);
        texto.textContent = `El resultado de ${num1} / ${num2} es ${resultado}`;
      } else {
        console.log("No se puede dividir por 0");
        texto.textContent = `No se puede dividir por 0`;
      }
      break;
    case "multiplicar":
      resultado = num1 * num2;
      console.log(`El resultado de ${num1} * ${num2} es ${resultado}`);
      texto.textContent = `El resultado de ${num1} * ${num2} es ${resultado}`;
      break;
    default:
      console.log(
        "Debes ingresar una de las operaciones definidas (sumar, restar, dividir o multiplicar)",
      );
      texto.textContent =
        "Debes ingresar una de las operaciones definidas (sumar, restar, dividir o multiplicar)";
  }
}

// alert("¡Gracias por usar nuestra aplicación, hasta luego!");
