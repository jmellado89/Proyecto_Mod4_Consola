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
      console.log(`El resultado de ${num1} + ${num2} es ${sumar(num1, num2)}`);
      texto.textContent = `El resultado de ${num1} + ${num2} es ${sumar(num1, num2)}`;

      break;
    case "restar":
      console.log(`El resultado de ${num1} - ${num2} es ${restar(num1, num2)}`);
      texto.textContent = `El resultado de ${num1} - ${num2} es ${restar(num1, num2)}`;
      break;
    case "dividir":
      if (num2 !== 0) {
        console.log(
          `El resultado de ${num1} / ${num2} es ${dividir(num1, num2)}`,
        );
        texto.textContent = `El resultado de ${num1} / ${num2} es ${dividir(num1, num2)}`;
      } else {
        console.warn("No se puede dividir por 0");
        texto.textContent = `No se puede dividir por 0`;
      }
      break;
    case "multiplicar":
      console.log(
        `El resultado de ${num1} * ${num2} es ${multiplicar(num1, num2)}`,
      );
      texto.textContent = `El resultado de ${num1} * ${num2} es ${multiplicar(num1, num2)}`;
      break;
    default:
      console.log(
        "Debes ingresar una de las operaciones definidas (sumar, restar, dividir o multiplicar)",
      );
      texto.textContent =
        "Debes ingresar una de las operaciones definidas (sumar, restar, dividir o multiplicar)";
  }
}

//Lección 4: funciones para cada operación matemática
function sumar(a, b) {
  return a + b;
}

function restar(a, b) {
  return a - b;
}

function dividir(a, b) {
  if (b !== 0) {
    return a / b;
  }
}

function multiplicar(a, b) {
  return a * b;
}

//Lección 3
// Artistas de Lollapalooza que me gustan

const artistas = [
  { nombre: "Sabrina Carpenter", genero: "femenino", dia: "viernes" },
  { nombre: "Chappell Roan", genero: "femenino", dia: "domingo" },
  { nombre: "Katseye", genero: "femenino", dia: "sabado" },
  { nombre: "Lewis Capaldi", genero: "masculino", dia: "domingo" },
  { nombre: "Marina", genero: "femenino", dia: "domingo" },
  { nombre: "Addison Rae", genero: "femenino", dia: "domingo" },
];

// Cantidad de artistas femeninas

let cantFem = 0;
for (let i = 0; i < artistas.length; i++) {
  if (artistas[i].genero === "femenino") {
    cantFem = cantFem + 1;
  }
}
console.log(`La cantidad de artistas femeninas es: ${cantFem}`);

// Cantidad de artistas masculinos
let cantMasc = 0;
let j = 0;
while (j < artistas.length) {
  if (artistas[j].genero === "masculino") {
    cantMasc = cantMasc + 1;
  }
  j++;
}
console.log(`La cantidad de artistas masculinos es: ${cantMasc}`);

// Cantidad de artistas que tocan el Domingo
let artistasDom = artistas.filter((artista) => artista.dia === "domingo");
console.log(
  `La cantidad de artistas que tocan el Domingo son: ${artistasDom.length}`,
);

// alert("¡Gracias por usar nuestra aplicación, hasta luego!");

// Cómo saber si un elemento es un array o un objeto?
console.log(Array.isArray(artistas)); // true
