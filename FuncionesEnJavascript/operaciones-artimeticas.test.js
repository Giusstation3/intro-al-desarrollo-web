const { sumar, restar, dividir, modulo, operar} = require("./operaciones-aritmeticas.js");

test("Debe sumar dos números correctamente", () => {
  expect(sumar(2, 3)).toBe(5);
});

test("Debe restar dos números correctamente", () => {
  expect(restar(2, 3)).toBe(-1);
  expect(restar(10, 7)).toBe(3);
});

//haciendo una prueba pero ahora con .toThrow
test("Debe lanzar un error al dividir entre cero", () => {
  expect(() => dividir(10, 0)).toThrow("No se puede dividir entre cero :(");
});


test("debe obtener el modulo de dos números", () => {
    expect(modulo(10,2)).toBe(0);
    expect(modulo(500,2)).toBe(0);
    expect(modulo(2,4)).toBe(2);
    try{
      modulo(2,0);
    } catch (e) {
      expect(e.message).toBe("No se puede dividir entre cero: (");
    }
    
});

//cada test es un escenario especifico y agregas un caso que funcione y uno que no por lo menos
test("debe hacer la operacion seleccionada", () => {
    expect(operar(2,4,"sumar")).toBe(6);
    expect(operar(2,4,"restar")).toBe(-2);
    expect(operar(2,4,"multiplicar")).toBe(8);
    expect(operar(2,4,"dividir")).toBe(.5);
    try{
      operar(2,0,"modulo");
      
    } catch (e) {
      expect(e.message).toBe("No se puede dividir entre cero: (");
    }
    
});


