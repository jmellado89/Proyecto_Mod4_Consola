// Avance lección 1
/*
- prompt para pedir al usuario un dato
- alert: para mostrar un mensaje al usuario

*/

console.log(
  "%c******* 🧚 Bienvenido a la mejor aplicación en consola del mundo mundial 🧚 *******",
  "color:white; font-size: 13px; background-color: purple; padding: 5px;",
);

// const texto = document.getElementById("mostrar");
// let nombre = prompt("Por favor, ingresa tu nombre:");
// let num1 = parseInt(prompt(`Hola ${nombre}, por favor ingresa un número: `));
// let num2 = parseInt(prompt("Ahora ingresa otro número: "));
// let operacion = prompt(
//   "Qué deseas hacer con estos dos números? (Sumar, restar, dividir, multiplicar",
// ).toLowerCase();
// let resultado;

// calcular();

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

//Lección 3 y 5
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
console.log(`\nLa cantidad de artistas masculinos es: ${cantMasc}`);

// Cantidad de artistas que tocan el Domingo
let artistasDom = artistas.filter((artista) => artista.dia === "domingo");
console.log(
  `\nLa cantidad de artistas que tocan el Domingo son: ${artistasDom.length}`,
);

// alert("¡Gracias por usar nuestra aplicación, hasta luego!");

// Leccion 5: Crear objeto con métodos

const artistaFavorito = {
  nombre: "Sabrina",
  apellido: "Carpenter",
  genero: "femenino",
  generoMusical: "pop",
  cancionFavorita: "Manchild",
  cantidadFans: 10000000,

  mostrarInfo() {
    return `\nMi artista favorito es ${this.nombre} ${this.apellido}, su género musical es ${this.generoMusical} y mi canción favorita es ${this.cancionFavorita}.`;
  },

  sumarFans(nuevosFans) {
    this.cantidadFans += nuevosFans;
    return `\nSe han sumado ${nuevosFans.toLocaleString("es-ES")} fans. Ahora ${this.nombre} tiene ${this.cantidadFans.toLocaleString("es-ES")} fans.`;
  },
};

console.log(artistaFavorito.mostrarInfo());
console.log(artistaFavorito.sumarFans(500000));

console.log("\nLista de artistas del día Domingo:");
artistasDom.forEach((artista) => console.log(`- ${artista.nombre}`));

const artistas26 = artistas.map((artista) => {
  artista.festival = "Lollapalooza";
  artista.year = 2026;
  return artista.nombre;
});

console.log("\nMejores artistas de Lollapalooza 2026:");
artistas26.forEach((artista, indice) => {
  console.log(`${indice + 1}. ${artista}`);
});

artistas.push(
  { nombre: "Florence and the Machine", festival: "Lollapalooza", year: 2016 },
  { nombre: "Sam Smith", festival: "Lollapalooza", year: 2019 },
);

const artistasPast = artistas.filter((artista) => artista.year !== 2026);
console.log("\nAlgunos de los mejores artista de otros años:");
artistasPast.forEach((artista) => console.log(`- ${artista.nombre}`));
