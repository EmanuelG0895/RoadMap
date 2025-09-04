"use strict";
/************
 * Tipos de Funciones *
 *************/
// Declaradas
function Suma(a, b) {
    return a + b;
}
// Anónimas
const Multiplicar = function (x, y) {
    return x * y;
};
// Arrow functions
const Resta = (a, b) => a - b;
// Con parámetros opcionales
function Saludo(nombre, mensaje) {
    return `${mensaje !== null && mensaje !== void 0 ? mensaje : "Hola"} ${nombre}`;
}
// Con parámetros por defecto
function elevar(base, exponente = 2) {
    return Math.pow(base, exponente);
}
// Con parámetros rest
function sumarTodos(...numeros) {
    return numeros.reduce((acc, n) => (acc = n), 0);
}
// Que retornan void
function imprimir(msg) {
    console.log(msg);
}
// Que retornan never
function error(mensaje) {
    throw new Error(mensaje);
}
const dividir = (a, b) => a / b;
// Genéricas
function identidad(valor) {
    return valor;
}
let num = identidad(5);
let txt = identidad("hey");
function combinar(a, b) {
    return a + b;
}
const res1 = combinar("Hola, ", "mundo");
const res2 = combinar(2, 3);
/*Crea una función que reciba dos parámetros de tipo cadena de texto y retorne un número.
 * - La función imprime todos los números del 1 al 100. Teniendo en cuenta que:
 *   - Si el número es múltiplo de 3, muestra la cadena de texto del primer parámetro.
 *   - Si el número es múltiplo de 5, muestra la cadena de texto del segundo parámetro.
 *   - Si el número es múltiplo de 3 y de 5, muestra las dos cadenas de texto concatenadas.
 *   - La función retorna el número de veces que se ha impreso el número en lugar de los textos.
 * */
function reto(a, b) {
    const suma = [];
    for (let index = 0; index <= 99; index++) {
        if (index % 3 === 0) {
            console.log(a);
        }
        if (index % 5 === 0) {
            console.log(b);
        }
        if (index % 3 === 0 && index % 5 === 0) {
            console.log("ambas letras", a, b);
        }
        if (index % 3 !== 0 && index % 5 !== 0) {
            suma.push(index);
        }
    }
    return suma.length;
}
console.log("numero de veces que se ah impreso el numero en lugar de textos", reto("a", "b"));
//# sourceMappingURL=funcionesyAlcance.js.map