let nombres = [];
let edades = [];
let mayor = 0;
let posicion = 0;

let semaforo = true;
let semaforo2 = true;

/* debugger;
 */
//agrega los nombres
do {
  let nombre = prompt("Ingrese nombre:");

  if (nombres.length === 10) {
    semaforo = false;
  } else {
    nombres.push(nombre);
  }
} while (semaforo === true);
//
//agrega edades

do {
  let edad = +prompt("Ingrese edad:");

  if (edades.length === 10) {
    semaforo2 = false;
  } else {
    edades.push(edad);
  }
} while (semaforo2 === true);

///

for (let i = 0; i < edades.length; i++) {
  
  if (edades[i] > mayor) {
    mayor = edades[i];
    posicion = i;
  }
  
}
console.log(nombres);
console.log(edades);
console.log(mayor);
console.log(nombres[posicion]);

