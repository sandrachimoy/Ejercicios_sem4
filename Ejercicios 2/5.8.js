let vector = [1,2,3,4,5];
let vectornuevo = [];


for (let i = 0; i < vector.length; i++) {
vectornuevo[i]=vector[i-1];
vectornuevo[0]=vector[vector.length-1];

}

console.log(vector);
console.log(vectornuevo);

