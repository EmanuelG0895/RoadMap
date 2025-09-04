/***********************
operadores aritméticos
***********************/

//suma
const suma = 3 + 3;
console.log("Suma:", suma);

//resta
const resta = 3 - 3;
console.log("Resta:", resta);

//multiplicacion
const multiplicacion = 3 * 3;
console.log("Multiplicación:", multiplicacion);

//division
const division = 3 / 3;
console.log("División:", division);

//modulo
const modulo = 3 % 3;
console.log("Módulo:", modulo);

//incremento
let incremento = 1;
incremento++;
console.log("Incremento:", incremento);

//decremento
let decremento = 1;
decremento--;
console.log("Decremento:", decremento);

/***********************
operadores de asignación
************************/

//asignación
let asignacion = 3;
console.log("Asignación:", asignacion);

//asignación Suma
let sumaAsignacion = 3;
sumaAsignacion += 3;
console.log("Suma y asignación:", sumaAsignacion);

// resta asignación
let restaAsignacion = 3;
restaAsignacion -= 3;
console.log("Resta y asignación:", restaAsignacion);

//multiplication Asignación
let multiplicacionAsignacion = 3;
multiplicacionAsignacion *= 3;
console.log("Multiplicación y asignación:", multiplicacionAsignacion);

//division Asignación
let divisionAsignacion = 3;
divisionAsignacion /= 3;
console.log("División y asignación:", divisionAsignacion);

/***************************
operadores de comparación
***************************/

//igualdad
const igualdad = 5 == 5;
console.log("Igualdad (5 == 5):", igualdad);

//igualdad estricta
const igualdadEstricta = 5 === 5;
console.log("Igualdad estricta (5 === 5):", igualdadEstricta);

//diferente
const diferente = 5 != 6;
console.log("Diferente (5 != 6):", diferente);

//diferente estricto
const diferenteEstricto = 5 !== 6;
console.log("Diferente estricto (5 !== 6):", diferenteEstricto);

//Mayor que
const mayorQue = 5 > 6;
console.log("Mayor que (5 > 6):", mayorQue);

//Menor que
const menorQue = 5 < 6;
console.log("Menor que (5 < 6):", menorQue);

//Mayor o igual que
const mayorOIgualQue = 5 >= 6;
console.log("Mayor o igual que (5 >= 6):", mayorOIgualQue);

//Menor o igual que
const menorOIgualQue = 3 <= 5;
console.log("Menor o igual que (3 <= 5):", menorOIgualQue);

/***************************
Reto adicional
Crea un programa que imprima por consola todos los números comprendidos
 * entre 10 y 55 (incluidos), pares, y que no son ni el 16 ni múltiplos de 3.
***************************/
for (let index = 10; index <= 55; index++) {
  if (index !== 16 && index % 2 == 0 && index % 3 !== 0) {
    console.log(index);
  } else if (index === 55) {
    console.log(index);
  }
}
