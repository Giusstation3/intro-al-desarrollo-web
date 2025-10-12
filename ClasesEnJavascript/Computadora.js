class Computadora {
    constructor(procesador, ram, almacenamiento){
        this.procesador = procesador;
        this.ram = ram;
        this.almacenamiento = almacenamiento;
    }
    
    iniciarSesion(usuario) {
        return `Bienvenido, ${usuario}`;
    }

    abrirPrograma(nombre) {
        return `Abriendo programa: ${nombre}`;
    }

    verificarEspacio(necesario) {
        if (this.almacenamiento >= necesario) {
            return "Espacio suficiente";
        } else {
            return "Espacio insuficiente";
        }
    }
}