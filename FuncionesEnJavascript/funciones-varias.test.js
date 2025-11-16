const {
  obtenerUsuario,
  obtenerValorNulo,
  obtenerValorIndefinido,
  esPositivo,
  lanzarError,
  obtenerLista,
  obtenerConfig
} = require("./funciones-varias.js");

  test(".toEqual() debe comparar objetos correctamente", () => {
    const usuario = obtenerUsuario();
    expect(usuario).toEqual({ nombre: "Gius", activo: true });
  });

  test(".toBeTruthy() debe validar un valor verdadero", () => {
    expect(esPositivo(10)).toBeTruthy();
  });

  test(".toBeFalsy() debe validar un valor falso", () => {
    expect(esPositivo(-5)).toBeFalsy();
  });

  test(".toBeNull() debe retornar null", () => {
    expect(obtenerValorNulo()).toBeNull();
  });

  test(".toBeUndefined() debe retornar undefined", () => {
    expect(obtenerValorIndefinido()).toBeUndefined();
  });

  test(".toThrow() debe lanzar un error", () => {
    expect(() => lanzarError()).toThrow("Ocurrió un error");
  });

  test(".toStrictEqual() debe comparar listas estrictamente", () => {
    expect(obtenerLista()).toStrictEqual([1, 2, 3]);
  });

  test(".toStrictEqual() debe comparar objetos estrictamente", () => {
    expect(obtenerConfig()).toStrictEqual({ modo: "oscuro", volumen: 80 });
  });

