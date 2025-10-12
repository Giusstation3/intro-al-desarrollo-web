class Casa {
    constructor(tamano,dueno,ubicacion){
        this.tamano = tamano;
        this.dueno = dueno;
        this.ubicacion = ubicacion;
    }
    
    describir() {
        return `Esta casa es de ${this.dueno}, tiene un tamaño de ${this.tamano} y está ubicada en ${this.ubicacion}.`;
    }

    cambiarDueno(nuevoDueno) {
        this.dueno = nuevoDueno;
    }

    esGrande() {
        return this.tamano > 100;
    }
}