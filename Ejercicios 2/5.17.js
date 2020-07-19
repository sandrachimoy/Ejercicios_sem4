let nombres = ["John", " Luis", " Javier", " Jorge", " Lucas"];
let horasdia = [8, 7, 9, 12, 10];
let sueldohora = [20, 15, 17, 50, 18];
let horassemana = [];
let sueldosemana = [];
let suma = 0;
let mayor = 0;

//horas trabajadas a la semana

for (let i = 0; i < horasdia.length; i++) {
  horassemana[i] = horasdia[i] * 6;
  sueldosemana[i] = horassemana[i] * sueldohora[i];
  suma += sueldosemana[i];
  if (horasdia[i] > mayor) {
    mayor = horasdia[i];
    posicion = i;
  }
}

console.log(`Personal: ${nombres}`);
console.log(`Horas trabajadas por semana: ${horassemana}`);
console.log(`Sueldo semanal por persona: ${sueldosemana}`);
console.log(`Total a pagar en la semana: S/ ${suma}`);
console.log(`Trabajador con mayores horas por dia: ${nombres[posicion]}`);
