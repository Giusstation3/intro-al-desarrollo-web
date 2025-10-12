class Television {
    constructor(pulgadas, marca, resolucion){
        this.pulgadas = pulgadas;
        this.marca = marca;
        this.resolucion = resolucion;
    }
    
    encender() {
        return "La televisión está encendida.";
    }

    cambiarResolucion(nuevaResolucion) {
        this.resolucion = nuevaResolucion;
    }

    subirVolumen(nivel) {
        return `Volumen aumentado en ${nivel} niveles.`;
    }
}