// Retorna un objeto con información básica
function obtenerUsuario() {
  return { nombre: "Gius", activo: true };
}

// Retorna null para usar con .toBeNull()
function obtenerValorNulo() {
  return null;
}

// Retorna undefined para usar con .toBeUndefined()
function obtenerValorIndefinido() {
  return undefined;
}

// Retorna true si el número es positivo (para .toBeTruthy y .toBeFalsy)
function esPositivo(num) {
  return num > 0;
}

// Lanza un error (para usar con .toThrow())
function lanzarError() {
  throw new Error("Ocurrió un error");
}

// Retorna un arreglo estricto para usar con .toStrictEqual()
function obtenerLista() {
  return [1, 2, 3];
}

// Retorna un objeto que se pueda comparar estrictamente
function obtenerConfig() {
  return { modo: "oscuro", volumen: 80 };
}

module.exports = {
  obtenerUsuario,
  obtenerValorNulo,
  obtenerValorIndefinido,
  esPositivo,
  lanzarError,
  obtenerLista,
  obtenerConfig
};