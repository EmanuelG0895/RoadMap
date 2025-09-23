/*
 * EJERCICIO:
 * Muestra ejemplos de todas las operaciones que puedes realizar con cadenas de caracteres
 * en tu lenguaje. Algunas de esas operaciones podrían ser (busca todas las que puedas):
 * - Acceso a caracteres específicos, subcadenas, longitud, concatenación, repetición,
 *   recorrido, conversión a mayúsculas y minúsculas, reemplazo, división, unión,
 *   interpolación, verificación...
 *
 * DIFICULTAD EXTRA (opcional):
 * Crea un programa que analice dos palabras diferentes y realice comprobaciones
 * para descubrir si son:
 * - Palíndromos
 * - Anagramas
 * - Isogramas
 */

//Operaciones básicas con string
let s: string = " Hola mundo ";

//Longitud de la cadena
let len: number = s.length;

//Subcadenas (subString,slice,substr)
s.substring(1, 4); //"ola"
s.slice(1, 4); //"ola"
s.slice(-5); //"mundo", contando desde el final

//Concatenar
let t: string = "!!!";
let u = s + t;
let v = s.concat(" ", "como", "estas");

//Buscar dentro de cadenas
s.indexOf("mun"); // regresa la posición donde comienza en este caso 5
s.lastIndexOf("o"); // regresa la ultima posición donde se encuentra el stringen este caso la letra O se encuntra ne la position numero 9
s.includes("la"); // true
s.startsWith("Hol"); // true
s.endsWith("do"); // true

//Reemplazar
let r1 = s.replace("mundo", "TypeScript"); // Hola TypeScript
let r2 = s.replace(/o/g, "0"); // reemplaza las O por 0

//Convertir mayúsculas/minúsculas
s.toUpperCase; //Convierte todo en mayúsculas
s.toLocaleLowerCase; //Convierte todo en minúsculas

//cortar, division (split) convierte un string en un array de substrings según el separador que le des.
let parts = s.split(" ");
const pulseRate = "pulse rate 81-100 (1)";

let partes = pulseRate.split("(");
//console.log(partes);
let numero = partes[1].split(")")[0];

// console.log(numero); // "1"

//Trim eliminacion de espacios
s.trim(); //elimina todos los espacios
s.trimStart(); //elimina los espacios al inicio
s.trimEnd(); //elimina los espacios al final

//Repetir
s.repeat(4); // repite el string n cantidad de veces

//Obtener código de carácter / de punto Unicode
let code = s.charCodeAt(1); //Obtiene el código del character correspondiente a la posición asignada
let char = String.fromCharCode(72); //Obtiene el código del character correspondiente al numero que se le pasa

//Comparación
s === "Hola mundo"; //true
s !== "hola mundo"; //true (case sensitive)

//tipos literales de cadena
type Saludo = "Hola" | "Hi" | "Buenos días";

let miSaludo: Saludo;

miSaludo = "Hola"; // OK
// miSaludo = "Hello";    // Error: no está dentro del tipo

//Template literals(plantillas de cadena)
let nombre = "Carlos";
let saludo = `Hola, ${nombre}!`; // "Hola, Carlos!"

// Template literal types:
type Color = "rojo" | "verde" | "azul";
type MensajeColor<C extends Color> = `Color elegido: ${C}`;

let m: MensajeColor<"rojo">;
// m = "Color elegido: rojo"; // OK
// m = "Color elegido: amarillo"; // Error, "amarillo" no forma parte de Color

/*
 * Crea un programa que analice dos palabras diferentes y realice comprobaciones
 * para descubrir si son:
 * - Palíndromos(Palabra o frase cuyas letras están dispuestas de tal manera que resulta la misma leída de izquierda a derecha que de derecha a izquierda; por ejemplo, anilina; dábale arroz a la zorra el abad.)
 * - Anagramas(Palabra o frase resultante de un anagrama o cambio en el orden de las letras, como de amor, Roma, o viceversa.)
 * - Isogramas (Definición: Es una palabra o frase que no contiene letras repetidas, es decir, cada letra aparece solo una vez. )
 */
function isPalindromo(palindromo: string): boolean {
  let normalizedString = palindromo.toLowerCase().replace(/[^a-z0-9]/g, "");
  let longitud = normalizedString.length;
  for (let i = 0; i < Math.floor(longitud / 2); i++) {
    if (normalizedString[i] !== normalizedString[longitud - 1 - i]) {
      return false;
    }
  }
  return true;
}

function isIsograma(isograma: string) {
  let normalizedString = isograma.toLowerCase().replace(/[^a-z0-9]/g, "");
  
}

function isAnagrama(s1: string, s2: string) {
  let anagrama = true;
  let normalizedString = s1.toLowerCase().replace(/[^a-z0-9]/g, "");
  let normalized = s2.toLowerCase().replace(/[^a-z0-9]/g, "");
  const contenedorUno = [];
  const contendorDos = [];
  if (normalized.length !== normalizedString.length) {
    return !anagrama;
  }
  for (let i = 0; i < normalizedString.length; i++) {
    contenedorUno.push(normalizedString[i]);
    contendorDos.push(normalized[i]);
  }

  if (contendorDos.sort().join === contenedorUno.sort().join) {
    return anagrama;
  } else {
    return !anagrama;
  }
}

function comparacion(p1: string, p2: string) {
  const palabraUno = isPalindromo(p1);
  const palabraDos = isPalindromo(p2);
  console.log("la pabara es un isograma", isIsograma(p1));
  console.log("la palabra uno:", palabraUno, "la palabra dos:", palabraDos);
  console.log(isAnagrama(p1, p2));
}

comparacion("Francesca", "amor");
