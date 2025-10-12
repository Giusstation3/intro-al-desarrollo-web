function insertarDato(clave, valor) {
  sessionStorage.setItem(clave, valor);
  console.log(`Dato insertado: ${clave} = ${valor}`);
}   

function eliminarDato(clave) {
  if (sessionStorage.getItem(clave) !== null) {
    sessionStorage.removeItem(clave);
    console.log(`Dato eliminado: ${clave}`);
  } else {
    console.log(`No existe un dato con la clave "${clave}" para eliminar.`);
  }
}

function buscarDato(clave) {
  const existe = sessionStorage.getItem(clave) !== null;
  console.log(`¿Existe la clave "${clave}"?: ${existe}`);
  return existe;
}

function borrarTodo() {
  sessionStorage.clear();
  console.log("Todos los datos de sessionStorage han sido eliminados.");
}
