let notas = [10, 13, 20, 03, 14, 05, 16, 17, 18, 19, 10, 12, 13, 04, 15];
let suma = 0;
/* let promedio = 0; */
let mayores = [];
let nota = 0;

for (let i = 0; i < notas.length; i++) {
  suma += notas[i];
  promedio = suma / notas.length;
}

promedio = suma / notas.length;

for (let i = 0; i < notas.length; i++) {
  if (notas[i] > promedio) {
    nota = notas[i];
    mayores.push(nota);
  }
}

console.log(`El Promedio de notas del grupo es ${promedio}`);
console.log(`Cantidad de notas mayores al promedio es ${mayores.length}`);

console.log(notas);
console.log(mayores);
