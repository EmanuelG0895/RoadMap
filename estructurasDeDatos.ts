/*
 * EJERCICIO:
 * - Muestra ejemplos de creación de todas las estructuras soportadas por defecto
 *   en tu lenguaje.
 * - Utiliza operaciones de inserción, borrado, actualización y ordenación.
 *
 * DIFICULTAD EXTRA (opcional):
 * Crea una agenda de contactos por terminal.
 * - Debes implementar funcionalidades de búsqueda, inserción, actualización
 *   y eliminación de contactos.
 * - Cada contacto debe tener un nombre y un número de teléfono.
 * - El programa solicita en primer lugar cuál es la operación que se quiere realizar,
 *   y a continuación los datos necesarios para llevarla a cabo.
 * - El programa no puede dejar introducir números de teléfono no numéricos y con más
 *   de 11 dígitos (o el número de dígitos que quieras).
 * - También se debe proponer una operación de finalización del programa.
 */

//Array mutable y orderable
const arr: number[] = [1, 2, 3];

// Inserción al final push()
arr.push(3);

// Inserción al inicio unshift()
arr.unshift(1);

// Inserción en posición específica** splice(start, 0, item)
arr.splice(1, 0, 2);

//Borrado último pop()
arr.pop();

//Borrado primero shift()`
arr.shift();

//Borrado en posición específica splice(start, deleteCount)
arr.splice(1, 1);

//Actualización por índice arr[index] = nuevoValor
arr[1] = 9;

//Ordenación ascendente sort((a,b)=>a-b)
arr.sort((a, b) => a - b);

//Ordenación descendente sort((a,b)=>b-a)
arr.sort((a, b) => b - a);
/*
 * DIFICULTAD EXTRA (opcional):
 * Crea una agenda de contactos por terminal.
 * - Debes implementar funcionalidades de búsqueda, inserción, actualización
 *   y eliminación de contactos.
 * - Cada contacto debe tener un nombre y un número de teléfono.
 * - El programa solicita en primer lugar cuál es la operación que se quiere realizar,
 *   y a continuación los datos necesarios para llevarla a cabo.
 * - El programa no puede dejar introducir números de teléfono no numéricos y con más
 *   de 11 dígitos (o el número de dígitos que quieras).
 * - También se debe proponer una operación de finalización del programa.
 */

interface Agenda {
  id: number;
  nombreUsuario: string;
  numeroTelefono: number;
}
const agenda: Agenda[] = [
  {
    id: 0,
    nombreUsuario: "Usuario",
    numeroTelefono: 1234567890,
  },
];

let tareaTerminada: boolean = true;
do {
  let respuesta = prompt(
    "Seleccione una opción:\n 1) Búsqueda\n 2) Inserción\n 3) Actualización\n 4) Eliminación \n 5) Salir"
  );

  switch (respuesta) {
    case "1":
      let numero = prompt("Búsqueda de contactos por numero de teléfono");
      let numerobuscado = Number(numero);
      for (let index = 0; index < agenda.length; index++) {
        const numerosGuardados = agenda[index].numeroTelefono;
        if (numerobuscado === numerosGuardados) {
          let nombre = agenda[index].nombreUsuario;
          let numero = agenda[index].numeroTelefono;
          console.log("Usuario encontrado", nombre, numero);
          tareaTerminada = false;
        } else {
          alert("usuario no encontrado");
          tareaTerminada = true;
        }
      }
      break;
    case "2":
      let nombreContactoNuevo = prompt("Agregar Nombre");
      let numeroContactoNuevo = prompt("Agregar Numero");
      if (
        nombreContactoNuevo !== null &&
        numeroContactoNuevo !== null &&
        numeroContactoNuevo.length === 10
      ) {
        let nuevoUsuario: Agenda = {
          id: Math.random(),
          nombreUsuario: nombreContactoNuevo,
          numeroTelefono: Number(numeroContactoNuevo),
        };
        agenda.push(nuevoUsuario);
        console.log(
          "usuario agregado correctamente \n",
          "nombre",
          nuevoUsuario.nombreUsuario,
          "numero",
          nuevoUsuario.numeroTelefono
        );
        tareaTerminada = false;
      } else {
        alert("verifique los datos e intente de nuevo");
      }
      break;
    case "3":
      prompt("Búsqueda de contactos");
      break;
    case "4":
      prompt("Búsqueda de contactos");
      break;
    case "5":
      tareaTerminada = false;
      break;

    default:
      break;
  }
} while (tareaTerminada);
